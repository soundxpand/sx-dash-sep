import React, { useState } from "react";
import { Row, Col, Card, Table, Tag, Dropdown, Menu } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import ChartWidget from 'components/shared-components/ChartWidget';
import { UnitSalesRegionData, StatisticData, RecentReleasesData 
} from './DefaultDashboardData';
import { EllipsisOutlined, PlusCircleOutlined, EyeOutlined } from '@ant-design/icons';
import {withRouter} from 'react-router-dom';
import { useSelector } from 'react-redux';

import moment from 'moment'; 
import { DATE_FORMAT_DD_MM_YYYY } from 'constants/DateConstant'
import utils from 'utils'
import Flex from 'components/shared-components/Flex'
import { Helmet } from 'react-helmet'

const TITLE = 'Overview - SoundXpand'

const recentReleasesOption = (
  <Menu>
    <Menu.Item key="0">
      <span>
        <div className="d-flex align-items-center">
          <PlusCircleOutlined />
          <span className="ml-2">Add New</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>
        <div className="d-flex align-items-center">
          <EyeOutlined />
          <span className="ml-2">View All</span>
        </div>
      </span>
    </Menu.Item>
  </Menu>
);

const cardDropdown = (menu) => (
  <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
    <a href="/#" className="text-gray font-size-lg" onClick={e => e.preventDefault()}>
      <EllipsisOutlined />
    </a>
  </Dropdown>
)

export const DefaultDashboard = () => {
  const [unitSalesRegionData] = useState(UnitSalesRegionData);
  const [statisticData] = useState(StatisticData);
  const [recentReleasesData] = useState(RecentReleasesData);
  const { direction } = useSelector(state => state.theme)

// Releases Table

const getShippingStatus = status => {
	if(status === 'Submitted') {
		return 'blue'
	}
	if(status === 'Returned') {
		return 'red'
	}
  if (status === 'Approved') {
    return 'green'
  }
	return ''
}

const tableColumns = [
	{
		title: 'Title / Artist',
		dataIndex: 'title',
		render: (_, record) => (
			<Flex>
				<AvatarStatus
          shape="square"
          size={50}
          src={record.artwork}
          name={record.title}
          subTitle={record.artist}
        />
			</Flex>
		),
		sorter: (a, b) => utils.antdTableSorter(a, b, 'title')
	},
  {
		title: 'Label',
		dataIndex: 'label',
	},
  {
		title: 'Tracks #',
		dataIndex: 'tracks',
	},
	{
		title: 'Release Date',
		dataIndex: 'releasedate',
		render: (_, record) => (
			<span>{moment.unix(record.releasedate).format(DATE_FORMAT_DD_MM_YYYY)}</span>
		),
		sorter: (a, b) => utils.antdTableSorter(a, b, 'releasedate')
	},
  {
		title: 'Barcode',
		dataIndex: 'barcode',
	},
  {
    title: 'Promotion',
    dataIndex: 'promolink',
    key: 'promolink',
    render: text => <a href="#">{text}</a>,
  },
	{
		title: 'Status',
		dataIndex: 'status',
		render: (_, record) => (
			<><Tag color={getShippingStatus(record.status)}>{record.status}</Tag></>
		),
		sorter: (a, b) => utils.antdTableSorter(a, b, 'status')
	},
]

const RecentReleases = () => (
	<Card title="Recent Releases" extra={cardDropdown(recentReleasesOption)}>
		<Table
			pagination={false}
			columns={tableColumns} 
			dataSource={recentReleasesData} 
			rowKey='id'
		/>
	</Card>
)
  
  return (
    <>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Row gutter={16}>
            {
              statisticData.map((sx, i) => (
                <Col xs={24} sm={24} md={24} lg={24} xl={8} key={i}>
                  <StatisticWidget
                    prefix={sx.prefix}
                    title={sx.title} 
                    value={sx.value}
                    subtitle={sx.subtitle}
                  />
                </Col>
              ))
            }
          </Row>
          <Row gutter={16}>
            <Col span={24}>
                <ChartWidget
                  title="Unit Sales by Region (Lifetime)"
                  series={unitSalesRegionData.series} 
                  xAxis={unitSalesRegionData.months} 
                  height={'300px'}
                  direction={direction}
                />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <RecentReleases />
        </Col>
      </Row>
    </>
  )
}


export default withRouter(DefaultDashboard);

import React from 'react'
import { Row, Col, Avatar, Card, Badge, Timeline, DatePicker } from 'antd';
import RegiondataWidget from 'components/shared-components/RegiondataWidget';
import { regionData } from './AnalyticDashboardData'
import Flex from 'components/shared-components/Flex'
import DonutChartWidget from 'components/shared-components/DonutChartWidget'
import NumberFormat from 'react-number-format';
import ChartWidget from 'components/shared-components/ChartWidget';
import { COLORS } from 'constants/ChartConstant';
import {
  overallPerformanceMonth,
  topProductData,
  overallPerformanceData,
  topServicesData, 
  topServicesLabels, 
  conbinedTopServicesData,
  topServicesColor,
} from './AnalyticDashboardData'
import PopUp from './PopUp'
import { useSelector } from 'react-redux'
import { CheckCircleOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet'

const TITLE = 'Analytics - SoundXpand'

const { RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

const TopTracks = () => (
	<Card 
		title="Top Tracks"
	>
		{topProductData.map(elm => (
			<Flex className="w-100 py-3" justifyContent="between" alignItems="center" key={elm.name}>
        <div className="mb-0 h5 font-weight-bold">{elm.name}</div>
				<Flex>
					<div className="mr-3 text-right">
						<span className="text-muted">Sales</span>
						<div className="mb-0 h5 font-weight-bold">
							<NumberFormat value={elm.sales} thousandSeparator={true} displayType="text" />
						</div>
					</div>
				</Flex>
			</Flex>
		))}
	</Card>
)

const Schedules = () => (
	<Card 
	  title="Schedules"
	>
	  <Flex className="w-100 py-3" justifyContent="between" alignItems="center">
	    <RangePicker onChange={onChange} />
	  </Flex>	
	  <Flex className="w-100 py-3" justifyContent="between" alignItems="center">
        <Timeline>
			<Timeline.Item>Month 1: Your music available for download and stream in music service.</Timeline.Item>
			<Timeline.Item>Month 2: The music service collates the data and creates reports.</Timeline.Item>
			<Timeline.Item>Month 3: Our partner process and check the data to create the reports to send us.</Timeline.Item>
			<Timeline.Item dot={<CheckCircleOutlined style={{ fontSize: '16px' }} />} color="green">
			  Month 4: We check the data and update it on your dashboard.
			</Timeline.Item>
        </Timeline>
	  </Flex>
	</Card>
)

const TopServices = () => (
	<DonutChartWidget
		series={topServicesData}
		labels={topServicesLabels}
		title="Top Services"
		customOptions={{colors: topServicesColor}}
		bodyClass="mb-2 mt-3"
		extra={
			<Row  justify="center">
				<Col xs={20} sm={20} md={20} lg={24}>
					<div className="mt-4 mx-auto" style={{maxWidth: 200}}>
						{conbinedTopServicesData.map(elm => (
							<Flex alignItems="center" justifyContent="between" className="mb-3" key={elm.label}>
								<div>
									<Badge color={elm.color} />
									<span className="text-gray-light">{elm.label}</span>
								</div>
								<span className="font-weight-bold text-dark">{elm.data}</span>
							</Flex>
						))}
					</div>
				</Col>
			</Row>
		}
	/>
)

const OverallPerformance = () => {
	const { direction } = useSelector(state => state.theme)
	return (
		<Card 
			title="Overall Performance"
		>
			<Flex>
				<div className="mr-5">
					<h2 className="font-weight-bold mb-1">523,201</h2>
					<p><Badge color={COLORS[6]}/>Streams</p>
				</div>
				<div>
					<h2 className="font-weight-bold mb-1">379,237</h2>
					<p><Badge color={COLORS[0]}/>Downloads</p>
				</div>
			</Flex>
			<div>
				<ChartWidget 
					card={false}
					series={overallPerformanceData} 
					xAxis={overallPerformanceMonth.categories}
					height={280}
					direction={direction}
					customOptions={
						{
							colors: [COLORS[6], COLORS[0]],
							legend: {
								show: false
							},
							stroke: {
								width: 2.5,
								curve: 'smooth'
							},
						}
					}
				/>
			</div>
		</Card>
	)
}


const rederRegionTopEntrance = (
  <div className="mb-4">
    <div className="d-flex align-items-center">
      <Avatar size={20} src="/img/flags/us.png"/>
      <h2 className="mb-0 ml-2 font-weight-bold">11,452</h2>
    </div>
    <span className="text-muted">Sale in unit</span>
  </div>
)

export const AnalyticDashboard = () => {

  return (
    <>
	  <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
	  <PopUp />
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24} xxl={18}>
          <RegiondataWidget 
            title="Top Countries"
            data={regionData}
            content={rederRegionTopEntrance}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xxl={6} >
		  <Schedules />
		</Col>
      </Row>
      <Row gutter={16}>
		<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={7} >
		  <TopTracks />
		</Col>
		<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={7}>
		  <TopServices />
		</Col>
		<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={10}>
		  <OverallPerformance />
		</Col>
	  </Row>
    </>
  )
}

export default AnalyticDashboard
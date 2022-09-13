import React from 'react'
import {
	Input,
	Row,
	Col,
	Card,
	Form,
	Upload,
	message,
	Select,
	Checkbox,
	Button,
	Typography
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import './style.css'

const { Dragger } = Upload;
const { Option } = Select;
const { Paragraph } = Typography;

const rules = {
	releaseTitle: [
		{
			required: true,
			message: 'Please enter release title',
		}
	],
	releaseVersion: [
	],
	barcode: [
		{
			required: true,
			message: 'Please enter barcode',
		}
	],
	catalogueno: [
	],
	label: [
		{
			required: true,
			message: 'Please select label',
		}
	],
	pline: [
		{
			required: true,
			message: 'Please enter phonogram holder name',
		}
	],
	cline: [
		{
			required: true,
			message: 'Please enter copyright holder name',
		}
	],
	mainArtist: [
		{
			required: true,
			message: 'Please enter artist name',
		}
	],
	artistName: [
		{
			required: false,
		}
	],
	mgenre: [
		{
			required: true,
			message: 'Please select main genre',
		}
	],
	agenre: [
		{
			required: true,
			message: 'Please select alternate genre',
		}
	]
}

function handleChange(value) {
	console.log(`selected ${value}`);
}

function onChange(e) {
	console.log(`checked = ${e.target.checked}`);
}

const selectYear = (
	<Select defaultValue="2022" onChange={handleChange}>
		<Option value="2023">2023</Option>
		<Option value="2022">2022</Option>
		<Option value="2021">2021</Option>
		<Option value="2020">2020</Option>
		<Option value="2019">2019</Option>
		<Option value="2018">2018</Option>
		<Option value="2017">2017</Option>
		<Option value="2016">2016</Option>
		<Option value="2015">2015</Option>
		<Option value="2014">2014</Option>
		<Option value="2013">2013</Option>
		<Option value="2012">2012</Option>
		<Option value="2011">2011</Option>
		<Option value="2010">2010</Option>
		<Option value="2009">2009</Option>
		<Option value="2008">2008</Option>
		<Option value="2007">2007</Option>
		<Option value="2006">2006</Option>
		<Option value="2005">2005</Option>
		<Option value="2004">2004</Option>
		<Option value="2003">2003</Option>
		<Option value="2002">2002</Option>
		<Option value="2001">2001</Option>
		<Option value="2000">2000</Option>
		<Option value="1999">1999</Option>
		<Option value="1998">1998</Option>
		<Option value="1997">1997</Option>
		<Option value="1996">1996</Option>
		<Option value="1995">1995</Option>
		<Option value="1994">1994</Option>
		<Option value="1993">1993</Option>
		<Option value="1992">1992</Option>
		<Option value="1991">1991</Option>
		<Option value="1990">1990</Option>
		<Option value="1989">1989</Option>
		<Option value="1988">1988</Option>
		<Option value="1987">1987</Option>
		<Option value="1986">1986</Option>
		<Option value="1985">1985</Option>
		<Option value="1984">1984</Option>
		<Option value="1983">1983</Option>
		<Option value="1982">1982</Option>
		<Option value="1981">1981</Option>
		<Option value="1980">1980</Option>
		<Option value="1979">1979</Option>
		<Option value="1978">1978</Option>
		<Option value="1977">1977</Option>
		<Option value="1976">1976</Option>
		<Option value="1975">1975</Option>
		<Option value="1974">1974</Option>
		<Option value="1973">1973</Option>
		<Option value="1972">1972</Option>
		<Option value="1971">1971</Option>
		<Option value="1970">1970</Option>
		<Option value="1969">1969</Option>
		<Option value="1968">1968</Option>
		<Option value="1967">1967</Option>
		<Option value="1966">1966</Option>
		<Option value="1965">1965</Option>
		<Option value="1964">1964</Option>
		<Option value="1963">1963</Option>
		<Option value="1962">1962</Option>
		<Option value="1961">1961</Option>
		<Option value="1960">1960</Option>
		<Option value="1959">1959</Option>
		<Option value="1958">1958</Option>
		<Option value="1957">1957</Option>
		<Option value="1956">1956</Option>
		<Option value="1955">1955</Option>
		<Option value="1954">1954</Option>
		<Option value="1953">1953</Option>
		<Option value="1952">1952</Option>
		<Option value="1951">1951</Option>
		<Option value="1950">1950</Option>
		<Option value="1949">1949</Option>
		<Option value="1948">1948</Option>
		<Option value="1947">1947</Option>
		<Option value="1946">1946</Option>
		<Option value="1945">1945</Option>
		<Option value="1944">1944</Option>
		<Option value="1943">1943</Option>
		<Option value="1942">1942</Option>
		<Option value="1941">1941</Option>
		<Option value="1940">1940</Option>
		<Option value="1939">1939</Option>
		<Option value="1938">1938</Option>
		<Option value="1937">1937</Option>
		<Option value="1936">1936</Option>
		<Option value="1935">1935</Option>
		<Option value="1934">1934</Option>
		<Option value="1933">1933</Option>
		<Option value="1932">1932</Option>
		<Option value="1931">1931</Option>
		<Option value="1930">1930</Option>
		<Option value="1929">1929</Option>
		<Option value="1928">1928</Option>
		<Option value="1927">1927</Option>
		<Option value="1926">1926</Option>
		<Option value="1925">1925</Option>
		<Option value="1924">1924</Option>
		<Option value="1923">1923</Option>
		<Option value="1922">1922</Option>
		<Option value="1920">1920</Option>
		<Option value="1919">1919</Option>
		<Option value="1918">1918</Option>
		<Option value="1917">1917</Option>
		<Option value="1916">1916</Option>
		<Option value="1915">1915</Option>
		<Option value="1914">1914</Option>
		<Option value="1913">1913</Option>
		<Option value="1912">1912</Option>
		<Option value="1911">1911</Option>
		<Option value="1910">1910</Option>
		<Option value="1909">1909</Option>
		<Option value="1908">1908</Option>
		<Option value="1907">1907</Option>
		<Option value="1906">1906</Option>
		<Option value="1905">1905</Option>
		<Option value="1904">1904</Option>
		<Option value="1903">1903</Option>
		<Option value="1902">1902</Option>
		<Option value="1901">1901</Option>
		<Option value="1900">1900</Option>
	</Select>
  );

const selectArtistType = (
	<Select defaultValue="feat." onChange={handleChange}>
		<Option value="feat.">feat.</Option>
		<Option value="and">and</Option>
		<Option value="with">with</Option>
	</Select>
);

const imageUploadProps = {
  name: 'file',
	multiple: false,
	listType: "picture-card",
	showUploadList: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
}

const beforeUpload = file => {
  const isJpg = file.type === 'image/jpeg';
  if (!isJpg) {
    message.error('You can only upload JPG file!');
  }
  const isLt25M = file.size / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 < 25;
  if (!isLt25M) {
    message.error('Image must smaller than 25MB!');
  }
  return isJpg && isLt25M;
}

const genres =
	[
		'Alternative',
		'Alternative Rock',
		'Alternativo & Rock Latino',
		'Anime',
		'Baladas y Boleros',
		'Big Band',
		'Blues',
		'Brazilian',
		'C-Pop',
		'Cantopop/HK-Pop',
		'Children\u0027s',
		'Chinese',
		'Christian',
		'Classical',
		'Comedy',
		'Contemporary',
		'Latin',
		'Country',
		'Dance',
		'Easy Listening',
		'Educational',
		'Electronic',
		'Enka',
		'Experimental',
		'Fitness & Workout',
		'Folk',
		'French Pop',
		'German Folk',
		'German Pop',
		'Hip-Hop/Rap',
		'Holiday',
		'Indo Pop',
		'Inspirational',
		'Instrumental',
		'J-Pop',
		'Jazz',
		'K-Pop',
		'Karaoke',
		'Kayokyoku',
		'Latin',
		'Latin Jazz',
		'Metal',
		'New Age',
		'Opera',
		'Original Pilipino Music',
		'Pop',
		'Pop Latino',
		'Punk',
		'R&B',
		'Raíces',
		'Reggae',
		'Reggaeton y Hip-Hop',
		'Regional Mexicano',
		'Rock',
		'Salsa y Tropical',
		'Singer/Songwriter',
		'Soul',
		'Soundtrack',
		'Spoken Word',
		'Tai-Pop',
		'Thai Pop',
		'Trot',
		'Vocal/Nostalgia',
		'World'
]

const GeneralField = props => (
	<Row gutter={16}>
		<Col xs={24} sm={24} md={17}>
			<Card title="Release Details">
			    <Row gutter={16}>
				    <Col xs={24} sm={24} md={12}>
						<Form.Item name="release title" label="Release title" rules={rules.releaseTitle}>
							<Input placeholder="Title of the Release" />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={12}>
						<Form.Item name="release version" label="Version (Optional)" rules={rules.releaseVersion}>
							<Input placeholder="Version of the Release" />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={16}>
				    <Col xs={24} sm={24} md={12}>
						<Form.Item name="barcode" label="Barcode" rules={rules.barcode}>
							<Input placeholder="UPC/EAN" />
							<Checkbox onChange={onChange}>Assign for me</Checkbox>
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={12}>
						<Form.Item name="catalogueno" label="Catalogue no." rules={rules.catalogueno}>
							<Input placeholder="Catalogue Number" disabled />
							<Checkbox onChange={onChange} defaultChecked disabled>Assign for me</Checkbox>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={16}>
				    <Col xs={24} sm={24} md={8}>
						<Form.Item name="label" label="Label" rules={rules.label}>
							<Select placeholder="Select" onChange={handleChange}>
								<Option value="ABC Records">ABC Records</Option>
							</Select>
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8}>
						<Form.Item name="pline" label="PLine" rules={rules.pline}>
							<Input addonBefore={selectYear} placeholder="℗ Holder Name" />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8}>
						<Form.Item name="cline" label="CLine" rules={rules.cline}>
							<Input addonBefore={selectYear} placeholder="© Holder Name" />
						</Form.Item>
					</Col>
				</Row>
			</Card>
			<Card title="Artists">
				<Row gutter={16}>
				<Col xs={24} sm={24} md={24}>
					<Form.Item label="Main Artist" name="mainartist" rules={rules.mainArtist}>
						<Input placeholder="Artist Name" />
					</Form.Item>
				</Col>
					<Col xs={24} sm={24} md={24}>
						<Form.List name="artistname">
							{(fields, { add, remove }) => {
								return (
									<div>
										{fields.map((field, index) => (
											<Row key={field.key}> 
												<Col xs={22} sm={22} md={22}>
													<Form.Item
														{...field}
														name={[field.name, 'artistname']}
														fieldKey={[field.fieldKey, 'artistname']}
														rules={rules.artistName}>
														<Input addonBefore={selectArtistType} placeholder="Artist Name" />
													</Form.Item>
												</Col>
												<Col xs={2} sm={2} md={2}>
													<MinusCircleOutlined className="mt-md-1 pt-md-2" style={{ paddingLeft: 20, paddingTop: 10 }} onClick={() => { remove(field.name)}} />
												</Col>
												<Col>
													<hr className="mt-2"/>
												</Col>
											</Row>
										))}
										<Form.Item>
											<Button type="dashed" onClick={() => { add()}} className="w-100">
												<PlusOutlined /> Add Artist
											</Button>
										</Form.Item>
									</div>
								);
							}}
						</Form.List>
					</Col>
				</Row>
			</Card>
		</Col>
		<Col xs={24} sm={24} md={7}>
			<Card title="Artwork">
				<Paragraph>
				<ul>
					<li>
						<a>File: JPG, Less than 25 MB</a>
					</li>
					<li>
						<a>Size {'\u0026'} Colour: {'3000\u00D73000'} pixels, RGB</a>
					</li>
				</ul>
				</Paragraph>
				<Dragger {...imageUploadProps} beforeUpload={beforeUpload} onChange={e=> props.handleUploadChange(e)}>
					{
						props.uploadedImg ? 
						<img src={props.uploadedImg} alt="" className="img-fluid" /> 
						: 
						<div>
							{
								props.uploadLoading ? 
								<div>
									<LoadingOutlined className="font-size-xxl text-primary"/>
									<div className="mt-3">Uploading</div>
								</div> 
								: 
								<div>
									<span class="fake-btn">Choose</span>
									<span class="file-msg">or drag and drop artwork here</span>
								</div>
							}
						</div>
					}
				</Dragger>
			</Card>
			<Card title="Genres">
				<Form.Item name="maingenre" label="Main Genre" rules={rules.mgenre} >
					<Select className="w-100" placeholder="Select">
						{
							genres.map(sx => (
								<Option key={sx} value={sx}>{sx}</Option>
							))
						}
					</Select>
				</Form.Item>
				<Form.Item name="alternategenre" label="Alternate Genre" rules={rules.agenre} >
					<Select className="w-100" placeholder="Select">
						{
							genres.map(sx => (
								<Option key={sx} value={sx}>{sx}</Option>
							))
						}
					</Select>
				</Form.Item>
			</Card>
		</Col>
	</Row>
)

export default GeneralField

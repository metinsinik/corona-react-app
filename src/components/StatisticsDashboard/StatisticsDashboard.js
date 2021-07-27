import React from "react";
import { Statistic, Embed, Icon, Header, Grid } from "semantic-ui-react";
import "./StatisticsDashboard.css";

const StatisticsDashboard = ({ stats, lastUpdate }) => {

	return (
		<Grid columns={2} centered style={{ padding: "0 20px", borderTopStyle: "solid" }}>
			<Grid.Row style={{ paddingBottom: "20x", textAlign: "center" }}>
				<Header as='h4' style={{ color: "white" }}>
					<Icon name='clock' />
					<Header.Content >
						Last Update: {lastUpdate}
					</Header.Content>
				</Header>
			</Grid.Row>
			<Grid.Row className={"stats-container"}>
				<Statistic.Group widths='four' style={{ textAlign: "center", width: "100%" }} size='tiny'>
					<Statistic>
						<Statistic.Value>
							<Icon name='hospital outline' />
							{stats["New Cases"]}
						</Statistic.Value>
						<Statistic.Label>New Cases</Statistic.Label>
					</Statistic>

					<Statistic color={"red"}>
						<Statistic.Value>
							{stats["New Deaths"]}
						</Statistic.Value>
						<Statistic.Label>New Deaths</Statistic.Label>
					</Statistic>

					<Statistic>
						<Statistic.Value>
							{stats["New Recovered"]}
						</Statistic.Value>
						<Statistic.Label>New Recovered</Statistic.Label>
					</Statistic>

					<Statistic>
						<Statistic.Value>
							<Icon name='heart outline' />
							{stats["Active Cases"]}
						</Statistic.Value>
						<Statistic.Label>Active Cases</Statistic.Label>
					</Statistic>
				</Statistic.Group>

				<Statistic.Group widths='four' style={{ paddingTop: "20px", textAlign: "center", width: "100%" }} size='tiny'>
					<Statistic>
						<Statistic.Value>
							<Icon name='hospital' />
							{stats["Total Cases"]}
						</Statistic.Value>
						<Statistic.Label>Total Cases</Statistic.Label>
					</Statistic>

					<Statistic color={"red"}>
						<Statistic.Value>
							<Icon name='minus circle' />
							{stats["Total Deaths"]}
						</Statistic.Value>
						<Statistic.Label>Total Deaths</Statistic.Label>
					</Statistic>

					<Statistic>
						<Statistic.Value>
							<Icon name='heartbeat' />
							{stats["Total Recovered"]}
						</Statistic.Value>
						<Statistic.Label>Total Recovered</Statistic.Label>
					</Statistic>

					<Statistic>
						<Statistic.Value>
							<Icon name='lab' />
							{stats["Total Tests"]}
						</Statistic.Value>
						<Statistic.Label>Total Tests</Statistic.Label>
					</Statistic>
				</Statistic.Group>
			</Grid.Row>
			<Grid.Row className={'stats-row'}>
				<Grid.Column style={{ boxShadow: "0 0 20px #000 !important", margin: "0 !important", padding: 0, border: "solid" }}>
					<Embed
						iframe={{
							style: {
								width: "100%"
							},
						}}

						defaultActive={true}
						autoPlay={true}
						icon='right circle arrow'
						placeholder='/images/coronavirus-facts.jpg'
						url="https://public.domo.com/cards/31O7r"
					/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}

export default StatisticsDashboard;
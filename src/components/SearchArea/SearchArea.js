import React, { useState } from "react";
import { Dropdown, Button, Grid } from "semantic-ui-react";
import LiveTrackingModal from "../LiveTrackingModal/LiveTrackingModal";
import worldCountries from "../../data/worldCountries.json";
import CovidService from "../../services/covidService";
import "./SearchArea.css";

const SearchArea = ({ setStats }) => {
    const [openTrackingModal, setOpenTrackingModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");

    const fetchStatistics = async () => {
        const covidService = new CovidService();
        let stats = {};
        if (selectedCountry === "World") {
            stats = await covidService.fetchAllStatistics();
        } else {
            stats = await covidService.fetchStatisticsByCountry(selectedCountry);
        }
        setStats(stats);
    };

    const handleChange = (e, { name, value }) => setSelectedCountry(value);

    return (
        <div style={{ "margin": "15px" }}>
            <Grid columns={2} centered>
                <Grid.Row>
                    <Grid.Column>
                        <Dropdown placeholder='Select Country'
                            search selection options={worldCountries}
                            onChange={handleChange} style={{ "marginRight": "30px" }} />
                        <span>
                            <Button className={"button"} style={{ "marginRight": "30px" }} onClick={() => fetchStatistics()}>Search</Button>
                            <Button className={"tracking-button"} onClick={() => setOpenTrackingModal(true)}>Live Tracking</Button>
                        </span>
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <LiveTrackingModal open={openTrackingModal} setOpen={setOpenTrackingModal} />
        </div>
    )
}

export default SearchArea;
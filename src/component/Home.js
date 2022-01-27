import React from 'react'
import { useLazyQuery } from '@apollo/client';
import { GET_COVID_DATA } from './GraphQl/graphql';
import { useState } from 'react';
import { Input, OuterDiv, StyledButton, STable, STHead, STHeadTR, STH, STBody, STBodyTR, STD, Card, Container, FCard } from '../styled/Style';


function Home() {
    const { getCode } = require("country-list");
    const [countrySearched, setCountrySearched] = useState("")

    const [getCovidData, { data }] = useLazyQuery(GET_COVID_DATA, {
        variables: { code: getCode(countrySearched) }
    })
    return (
        <>
            <OuterDiv>
                <div>
                    <div>Countries Stats</div>
                    <Input type="text" placeholder='country name' onChange={(event) => {
                        setCountrySearched(event.target.value)
                    }} />
                    <StyledButton onClick={() => getCovidData()}>Search</StyledButton><br />
                </div>
            </OuterDiv>
            {data && <>
                <div>
                    <STable>
                        <STHead>
                            <STHeadTR>
                                <STH>Country</STH>
                                <STH>Region</STH>
                                <STH>Sub Region</STH>
                            </STHeadTR>
                        </STHead>
                        <STBody>
                            <STBodyTR>
                                <STD>{data.country.name}</STD>
                                <STD>{data.country.region.name}</STD>
                                <STD>{data.country.subRegion.name}</STD>
                            </STBodyTR>
                        </STBody>
                    </STable>


                    <FCard>
                        <Card>
                            <Container>
                                <strong>Confirmed Cases</strong><br />
                                {data.country.latest.confirmed}
                            </Container>
                        </Card>

                        <Card>
                            <Container>
                                <strong>Deaths</strong><br />
                                {data.country.latest.deceased}
                            </Container>
                        </Card>

                        <Card>
                            <Container>
                                <strong>Recovered Cases</strong><br />
                                0
                            </Container>
                        </Card>

                        <Card>
                            <Container>
                                <strong>Last Updated</strong><br />
                                {new Date(data.country.latest.lastUpdated).toDateString()}
                            </Container>
                        </Card>
                    </FCard>
                </div>
            </>}
        </>
    )
}

export default Home



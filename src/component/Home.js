import React from 'react'
import { useLazyQuery } from '@apollo/client';
import { GET_COVID_DATA } from './GraphQl/graphql';
import { useState } from 'react';
import { OuterDiv, StyledButton,  STable, STHead, STHeadTR, STH, STBody, STBodyTR, STD } from '../styled/Style';


function Home() {
    const { getCode } = require("country-list");
    const [countrySearched, setCountrySearched] = useState("")

    const [getCovidData, { data, error }] = useLazyQuery(GET_COVID_DATA, {
        variables: { code: getCode(countrySearched) }
    })
    return (
        <>
            <OuterDiv>
                <div>
                    <div>Countries Stats</div>
                    <input type="text" placeholder='country name' onChange={(event) => {
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
                                <STH>Confirm</STH>
                                <STH>Deceased</STH>
                                <STH>Recovered</STH>
                                <STH>Last Updated</STH>
                            </STHeadTR>
                        </STHead>
                        <STBody>
                            <STBodyTR>
                                <STD>{data.country.name}</STD>
                                <STD>{data.country.latest.confirmed}</STD>
                                <STD>{data.country.latest.deceased}</STD>
                                <STD>0</STD>
                                <STD>{data.country.latest.lastUpdated}</STD>
                            </STBodyTR>
                        </STBody>
                    </STable>
                </div>
            </>}
        </>
    )
}

export default Home

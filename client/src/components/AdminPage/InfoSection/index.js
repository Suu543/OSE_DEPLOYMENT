import React from "react";
import { InfoContainer, InfoWrapper, InfoHeroRow, InfoHeaderH1, InfoFeatureH1, InfoFeatureRow, InfoFeatureWrapper, InfoFeatureColumn, InfoFeatureColumnDetail, InfoFeatureh1 } from "./InfoElements";
import InfoData from "./infoData";


const AdminInfoSection = () => {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoHeroRow>
                    <InfoHeaderH1>Admin Dashboard</InfoHeaderH1>
                </InfoHeroRow>
                <InfoFeatureWrapper>
                    <InfoFeatureH1>Features</InfoFeatureH1>
                    <InfoFeatureRow>
                        {
                            InfoData.map((info, index) => (
                                <InfoFeatureColumn style={info.style}>
                                    <InfoFeatureh1>{info.feature}</InfoFeatureh1>
                                    <InfoFeatureColumnDetail to={info.path}>{info.detail}</InfoFeatureColumnDetail>
                                </InfoFeatureColumn>
                            ))
                        }
                    </InfoFeatureRow>
                </InfoFeatureWrapper>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default AdminInfoSection;
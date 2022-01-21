import React from "react";
import './BrowseCategories.css';
import { BusinessIcon,EstatePlanningIcon,FamilyIcon,EmploymentIcon,HealthCareIcon,ImmigrationIcon,RealEstateIcon,TaxesIcon } from "../SvgComponents.js/SvgComponents";

const BrowseCategories = ()=>{
    return(
        <div className="categories-container" id="section3">
            <div className="browse-txt">
                Browse Categories
            </div>
            <div className="categories">
                <div className="category">
                    <BusinessIcon/>
                    <div className="category-name">Business</div>
                    <hr className="line"/>
                </div>
                <div className="category">
                    <EmploymentIcon/>
                    <div className="category-name">Employment</div>
                    <hr className="line"/>
                </div>
                <div className="category">
                    <EstatePlanningIcon/>
                    <div className="category-name">Estate Planning</div>
                    <hr className="line"/>
                </div>
                <div className="category">
                    <FamilyIcon/>
                    <div className="category-name">Family</div>
                    <hr className="line"/>
                </div>
                <div className="category">
                    <HealthCareIcon/>
                    <div className="category-name">HealthCare</div>
                    <hr className="line"/>
                </div>
                <div className="category">
                    <ImmigrationIcon/>
                    <div className="category-name">Immigration</div>
                    <hr className="line"/>
                </div>
                <div className="category">
                    <RealEstateIcon/>
                    <div className="category-name">Real Estate</div>
                    <hr className="line"/>
                </div>
                <div className="category">
                    <TaxesIcon/>
                    <div className="category-name">Taxes</div>
                    <hr className="line"/>
                </div>
            </div>
        </div>
    );
};
export default BrowseCategories;
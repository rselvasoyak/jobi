const JobFilterForm = () => {
    return (
        <>
            <section className="filterByForm">
                <h4>filter by </h4>
                <aside>
                    <form action="#" method="GET" name="filter">
                        <fieldset className="filterCont">
                            <div  className="filter">
                                <label htmlFor="keyword"
                                className="sr-only" > search by keyword </label>
                                <input 
                                    id="keyword" 
                                    name="keyword"
                                    type="text" 
                                    aria-describedby="inputOneDesc"
                                    placeholder="search by keyword"
                                ></input>
                                <div 
                                    className="sr-only"
                                    id="inputOneDesc"
                                >
                                    Please enter the keyword you would like to filter the search with
                                </div>
                            </div>

                            <div className="filter categories">
                                <label htmlFor="categDesc"> categories </label>
                                <select 
                                    aria-describedby="categDesc"
                                    id="categDesc" 
                                    name="categDesc"
                                >
                                    <option value="development">development</option>
                                    <option value="accounting">accounting</option>
                                    <option value="finance">finance</option>
                                    <option value="other">other</option>
                                </select>
                                <div 
                                    className="sr-only"
                                    id="categDesc"
                                >
                                    Please select the catrgory of field you would like to filter your search for.
                                </div>
                            </div>
                            
                            <div className="filter jobTypeCont">
                                <fieldset className="jobType" aria-describedby="jobTypeInfo">
                                    <legend>job type</legend>
                                    <div className="checkboxItem">
                                        <input type="checkbox" id="fullTime" name="fullTime"></input>
                                        <label htmlFor="fullTime">full-time</label>
                                    </div>

                                    <div className="checkboxItem">
                                        <input type="checkbox" id="hourlyContract" name="hourlyContract"></input>
                                        <label htmlFor="hourlyContract">hourly-contract</label>
                                    </div>

                                    <div className="checkboxItem">
                                        <input type="checkbox" id="partTime" name="partTime"></input>
                                        <label htmlFor="partTime">part-time(20hr/week)</label>
                                    </div>

                                    <div className="checkboxItem">
                                        <input type="checkbox" id="fixedPrice" name="fixedPrice"></input>
                                        <label htmlFor="fixedPrice">fixed-price</label>
                                    </div>

                                    <div 
                                        className="sr-only"
                                        id="jobTypeInfo"
                                    >
                                        Please Select the type of job you would like to search for.
                                    </div>
                                </fieldset>
                            </div>
                            
                            <div className="filter experienceLevelCont">
                                <fieldset aria-describedby="experLevelInfo" className="experienceLevel">
                                    <legend>Experience level</legend>
                                    <div className="checkboxItem">
                                        <input type="checkbox" id="beginner" name="experience"></input>
                                        <label htmlFor="beginner">beginner (1-3 yrs)</label>
                                    </div>

                                    <div className="checkboxItem">
                                        <input type="checkbox" id="intermediate" name="experience"></input>
                                        <label htmlFor="intermediate">intermediate (1-5 yrs)</label>
                                    </div>

                                    <div className="checkboxItem">
                                        <input type="checkbox" id="expert" name="experience"></input>
                                        <label htmlFor="expert">expert (1-10 yrs)</label>
                                    </div>

                                    <div 
                                        className="sr-only"
                                        id="experLevelInfo"
                                    >
                                        Please Select the experience level for job you would like to search for.
                                    </div>
                                </fieldset>
                            </div>

                            <div className="filter">
                                <fieldset className="salaryRangeSect">
                                    <legend>Salary Range</legend>

                                    <div className="salaryRangeInput">
                                        <label htmlFor="salaryMinValue" className="sr-only"> min value</label>
                                        <input 
                                            type="text" 
                                            id="salaryMinValue"  
                                            min="1"                            
                                            max="1000" 
                                            name="salaryMinValue" 
                                            aria-labelledby="salaryMinValue"
                                        ></input>
                                        <div 
                                            className="sr-only"
                                            id="salaryMinValue"
                                        >
                                            Please enter the minimum salary you are looking for
                                        </div>
                                        
                                        <p>-</p>

                                        <label htmlFor="salaryMaxValue" className="sr-only"> max value </label>
                                        <input 
                                            id="salaryMaxValue"
                                            type="text"
                                            min="1" 
                                            max="1000"
                                            name="salaryMaxValue"
                                            aria-labelledby="salaryMaxValue"  
                                        ></input>
                                        <div 
                                            className="sr-only"
                                            id="salaryMaxValue"
                                        >
                                            Please enter the maximum salary you are looking for
                                        </div>

                                        <p>USD</p>
                                    </div>
                                
                                    <label htmlFor="salaryRange" className="sr-only"> salary range </label>
                                    <input 
                                        id="salaryRange"
                                        type="range"
                                        min="1" 
                                        max="1000"
                                        name="salaryRange"
                                        aria-labelledby="salaryRange"  
                                    ></input>
                                    <div 
                                        className="sr-only"
                                        id="salaryRange"
                                    >
                                        Please select salary range on the range slider. 
                                    </div>
                                </fieldset>
                            </div>

                            <div className="filter">
                                <label htmlFor="">location</label>
                                <select 
                                    aria-describedby="locationInfo"
                                    id="levelOfSpiciness" 
                                    name="levelOfSpiciness"
                                >
                                    <option value="washington">washington</option>
                                    <option value="toronto">toronto</option>
                                    <option value="newYork">new york</option>
                                    <option value="other">other</option>
                                </select>
                                <div 
                                    className="sr-only"
                                    id="locationInfo"
                                >
                                    Please select the location for you want to filter your search for. 
                                </div>
                            </div>

                            <div className="filter">
                                <label htmlFor="">english fluency</label>
                                <select 
                                    aria-describedby="englishLevelInfo"
                                    id="levelOfSpiciness" 
                                    name="levelOfSpiciness"
                                >
                                    <option value="fluent">fluent</option>
                                    <option value="advanced">advanced</option>
                                    <option value="intermediate">intermediate</option>
                                    <option value="beginner">beginner</option>
                                    <option value="native">native</option>
                                </select>
                                <div 
                                    className="sr-only"
                                    id="englishLevelInfo"
                                >
                                    Please select your English Fluency Level. 
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </aside>
            </section>
            <section className="jobPosts">
                <p>Hello 1</p>
            </section>
        </>
    )
}

export default JobFilterForm;
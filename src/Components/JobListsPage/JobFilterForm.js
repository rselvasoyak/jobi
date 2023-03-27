const JobFilterForm = () => {
    return (
        <>
            <section className="filterByForm">
                <h4>filter by </h4>
                <aside>
                    <form action="" method="" name="">
                        <fieldset>
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

                            <fieldset aria-describedby="jobTypeInfo">
                                <legend>job type</legend>
                                <label htmlFor="fullTime">full-time</label>
                                <input type="checkbox" id="fullTime" name="fullTime"></input>

                                <label htmlFor="hourlyContract">hourly-contract</label>
                                <input type="checkbox" id="hourlyContract" name="hourlyContract"></input>

                                <label htmlFor="partTime">part-time(20hr/week)</label>
                                <input type="checkbox" id="partTime" name="partTime"></input>

                                
                                <label htmlFor="fixedPrice">fixed-price</label>
                                <input type="checkbox" id="fixedPrice" name="fixedPrice"></input>

                                <div 
                                    className="sr-only"
                                    id="jobTypeInfo"
                                >
                                    Please Select the type of job you would like to search for.
                                </div>
                            </fieldset>
                            
                            <fieldset aria-describedby="experLevelInfo" className="experienceLevel">
                                <legend>Experience level</legend>
                                <label htmlFor="beginner">beginner (1-3 yrs)</label>
                                <input type="radio" id="beginner" name="experience"></input>

                                <label htmlFor="intermediate">intermediate (1-5 yrs)</label>
                                <input type="radio" id="intermediate" name="experience"></input>

                                <label htmlFor="expert">expert (1-10 yrs)</label>
                                <input type="radio" id="expert" name="experience"></input>

                                <div 
                                    className="sr-only"
                                    id="experLevelInfo"
                                >
                                    Please Select the experience level for job you would like to search for.
                                </div>
                            </fieldset>

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
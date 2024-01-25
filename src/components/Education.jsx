import React from "react";
import jcet from "../assets/jcet.avif"
import bmhss from "../assets/bmhss.jpeg"
import stanns from "../assets/stanns.jpeg"

const Education = () => {
          return (
                    <div name="education" className="w-full h-full bg-[#102b53] text-gray-300">
                              <div className="flex flex-col justify-center items-center w-full h-full">
                                        <div className="maw-w-[1000px] w-full grid grid-cols-2 gap-8">
                                                  <div className="sm:text-right pb-8 pl-4">
                                                            <p className="text-4xl font-bold inline border-b-4 border-red-600">
                                                                      Education
                                                            </p>
                                                  </div>
                                                  
                                        </div><br /><br /><br />
                                        <div className="maw-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4">
                                                  <div className="sm:text-right text-4xl font-bold">
                                                            <h4>Bachelor Of Technology<br />[Computer Science]
                                                            </h4>
                                                  </div>
                                                  <div>
                                                            <p>
                                                                      Jawaharlal College of Engineering and Technology |
                                                                      2019 - 2023 |
                                                                      CGPA:7.23/10.00 |
                                                                      Bachelor Degree in Computer Science and
                                                                      Engineering
                                                            </p>
                                                  </div>
                                                  <div>
                                                            <img src={jcet} className=" h-50 w-60" />
                                                  </div>
                                        </div><br />

                                        <div className="maw-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4">
                                                  <div className="sm:text-right text-4xl font-bold">
                                                            <p>Higher Secondary Education <br /> [Computer Science]</p>
                                                  </div>
                                                  <div>
                                                            <p>
                                                                      Bharathamatha Higher Secondary School | 2017 - 2019 |
                                                                      Percentage: 79.25% |
                                                                      Kerala State Education Board
                                                                      Computer Science
                                                            </p>
                                                  </div>
                                                  <div>
                                                            <img src={bmhss} className=" h-50 w-60" />
                                                  </div>
                                        </div><br />

                                        <div className="maw-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4">
                                                  <div className="sm:text-right text-4xl font-bold">
                                                            <p>Class X</p>
                                                  </div>
                                                  <div>
                                                            <p>
                                                                      St Anns Senior Secondary School | 2016 - 2017 |
                                                                      CGPA: 8.60/10.00 |
                                                                      Central Board of Secondary Education |
                                                            </p>
                                                  </div>
                                                  <div>
                                                            <img src={stanns} className=" h-50 w-60" />
                                                  </div>
                                        </div><br />
                              </div>
                    </div>

                    
          );
};

export default Education;
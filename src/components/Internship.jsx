import React from "react";
import syn from "../assets/synnefo3avif.avif"

const Internship = () => {
          return (
                    <div name="about" className="w-full h-screen bg-[#102b53] text-gray-300">
                              <div className="flex flex-col justify-center items-center w-full h-full">
                                        <div className="maw-w-[1000px] w-full grid grid-cols-2 gap-8">
                                                  <div className="sm:text-right pb-8 pl-4">
                                                            <p className="text-4xl text-center font-bold inline border-b-4 border-red-600">
                                                                      Internship
                                                            </p>
                                                  </div>

                                        </div><br /><br /><br /><br />
                                        <div className="maw-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-12">
                                                  <div className="sm:text-right text-4xl font-bold">
                                                            <h4>Synnefo Solutions <br />[Mern Stack Development]</h4>
                                                  </div>
                                                  <div className="text-center">
                                                            <p>
                                                                      Full Stack Development Training | <br />
                                                                      Ernakulam | <br />
                                                                      2023 – 2024
                                                            </p>
                                                  </div>
                                                  <div>
                                                            <img src={syn} className=" h-50 w-60" />
                                                  </div>
                                        </div><br />



                              </div>
                    </div>


          );
};

export default Internship;
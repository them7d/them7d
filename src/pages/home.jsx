import { SparklesCore } from "../components/ui/sparkles";
import Image from 'next/image';

function page() {
      return (
            <>
                  <section className="main relative  flex flex-col items-center">
                        <div className="main_content max-w-xl mt-40">
                              <div className="flex">
                                    <div className="images rounded-full overflow-hidden">
                                          <Image src="/images/avatar.jpg" width={100} height={100} alt="My Local Image" />
                                    </div>
                                    <div className="ml-10 flex flex-col justify-center">
                                          <h1 className="text-4xl mb-2">Mohammad Zaid</h1>
                                          <h2 className="text-sm text-gray-200">web developer, ecommerce themes developer</h2>
                                    </div>
                              </div>
                              <p className="mt-10">
                                    Mohammad Zaid, a web developer with four years of experience based in Baghdad, Iraq, has a passion for creating awesome and fantastic websites and well-equipped to tackle complex web development projects and deliver high-quality results.
                              </p>
                        </div>
                        <div className="socialmedia mt-12 flex justify-evenly w-full max-w-xl">
                              {/* <!-- Github --> */}
                              <a href="https://github.com/them7d" alt="github">
                                    <button
                                          type="button"
                                          data-twe-ripple-init
                                          data-twe-ripple-color="light"
                                          class="mb-2 inline-block rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                          <span class="[&>svg]:h-4 [&>svg]:w-4">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor"
                                                      viewBox="0 0 496 512">
                                                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                                                      <path
                                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                                </svg>
                                          </span>
                                    </button>
                              </a>
                              {/* <!-- Instagram --> */}
                              <a href="https://www.instagram.com/the_m7d" alt="instagram">
                                    <button
                                          type="button"
                                          data-twe-ripple-init
                                          data-twe-ripple-color="light"
                                          class="mb-2 inline-block rounded bg-[#c13584] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                          <span class="[&>svg]:h-4 [&>svg]:w-4">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor"
                                                      viewBox="0 0 448 512">
                                                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                                                      <path
                                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                                </svg>
                                          </span>
                                    </button>
                              </a>
                              {/* <!-- Linkedin --> */}
                              <a href="https://www.linkedin.com/in/them7d/" alt="linkedin">
                                    <button
                                          type="button"
                                          data-twe-ripple-init
                                          data-twe-ripple-color="light"
                                          class="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                          <span class="[&>svg]:h-4 [&>svg]:w-4">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor"
                                                      viewBox="0 0 448 512">
                                                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                                                      <path
                                                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                                </svg>
                                          </span>
                                    </button>
                              </a>
                              {/* <!-- dev.to --> */}
                              <a href="https://dev.to/m7d" alt="dev.to">
                                    <button
                                          type="button"
                                          data-twe-ripple-init
                                          data-twe-ripple-color="light"
                                          class="mb-2 inline-block rounded bg-[#fff] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                          <span class="[&>svg]:h-4 [&>svg]:w-4">
                                                <svg viewBox="0 32 447.99999999999994 448" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z" />
                                                </svg>
                                          </span>
                                    </button>
                              </a>
                              {/* <!-- codewars --> */}
                              <a href="https://www.codewars.com/users/them7d" alt="codewars">
                                    <button
                                          type="button"
                                          data-twe-ripple-init
                                          data-twe-ripple-color="light"
                                          class="mb-2 inline-block rounded bg-gradient-to-t from-[#E52030] to-[#F44F5A] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                          <span class="[&>svg]:h-4 [&>svg]:w-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" baseProfile="basic">
                                                      <linearGradient id="oMwB8FKdal_w2h6EGYqYCa" x1="20.395" x2="29.813" y1="1.634" y2="60.07" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0" stop-color="#f44f5a" />
                                                            <stop offset=".443" stop-color="#ee3d4a" />
                                                            <stop offset="1" stop-color="#e52030" />
                                                      </linearGradient>
                                                      <path fill="url(#oMwB8FKdal_w2h6EGYqYCa)" d="M42,10.5v27c0,2.48-2.02,4.5-4.5,4.5h-27C8.02,42,6,39.98,6,37.5v-27C6,8.02,8.02,6,10.5,6h27	C39.98,6,42,8.02,42,10.5z" />
                                                      <linearGradient id="oMwB8FKdal_w2h6EGYqYCb" x1="20.961" x2="26.53" y1="1.513" y2="42.717" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0" stop-color="#4b4b4b" />
                                                            <stop offset="1" stop-color="#252525" />
                                                      </linearGradient>
                                                      <path fill="url(#oMwB8FKdal_w2h6EGYqYCb)" d="M35.501,23.257c-0.034-0.062-0.08-0.116-0.116-0.177c0.804-1.675,0.832-3.817-0.09-5.6	c-1.1-2.251-3.596-3.837-6.188-3.812c-0.071-0.001-0.141,0.011-0.211,0.012c-1.049-1.533-2.89-2.628-4.894-2.722	c-2.499-0.173-5.121,1.196-6.395,3.453c-0.036,0.06-0.061,0.127-0.095,0.189c-1.852,0.142-3.721,1.188-4.804,2.878	c-1.399,2.078-1.525,5.033-0.207,7.265c0.034,0.062,0.08,0.116,0.116,0.177c-0.804,1.675-0.832,3.817,0.09,5.6	c1.1,2.251,3.596,3.837,6.188,3.812c0.071,0.001,0.141-0.011,0.211-0.012c1.049,1.533,2.89,2.628,4.894,2.722	c2.499,0.173,5.121-1.196,6.395-3.453c0.036-0.06,0.061-0.127,0.095-0.189c1.852-0.142,3.721-1.188,4.804-2.878	C36.693,28.444,36.819,25.489,35.501,23.257z M33.125,18.733c0.556,0.779,0.882,1.742,0.943,2.773	c-0.398-0.353-0.825-0.673-1.283-0.931c-1.132-0.59-2.422-0.914-3.681-0.825c-1.748,0.065-3.366,0.922-4.445,2.155	c-0.161-0.051-0.325-0.078-0.489-0.09c0.021-1.143,0.36-2.203,0.967-3.053c0.913-1.322,2.439-2.091,3.966-2.103	C30.653,16.622,32.171,17.411,33.125,18.733z M20.193,15.909c0.744-1.36,2.186-2.28,3.807-2.445c0.953-0.092,1.95,0.107,2.873,0.57	c-0.505,0.168-0.995,0.378-1.448,0.646c-1.077,0.685-2.003,1.64-2.555,2.775c-0.819,1.549-0.885,3.382-0.353,4.934	c-0.12,0.11-0.227,0.234-0.322,0.373c-0.981-0.59-1.73-1.414-2.163-2.366C19.343,18.943,19.44,17.238,20.193,15.909z M14.876,18.731	c0.397-0.871,1.067-1.635,1.93-2.203c-0.107,0.521-0.171,1.051-0.165,1.577c0.055,1.276,0.419,2.554,1.126,3.6	c0.931,1.483,2.484,2.456,4.093,2.773c0.036,0.162,0.085,0.321,0.157,0.471c-0.999,0.552-2.085,0.786-3.123,0.686	c-1.602-0.13-3.03-1.067-3.804-2.383C14.284,21.927,14.208,20.218,14.876,18.731z M14.875,29.267	c-0.556-0.779-0.882-1.742-0.943-2.773c0.398,0.353,0.825,0.673,1.283,0.931c1.132,0.59,2.422,0.914,3.681,0.825	c1.748-0.065,3.366-0.922,4.445-2.155c0.161,0.051,0.325,0.078,0.489,0.09c-0.021,1.143-0.36,2.203-0.967,3.053	c-0.913,1.322-2.439,2.091-3.966,2.103C17.347,31.378,15.829,30.589,14.875,29.267z M27.807,32.091	c-0.744,1.36-2.186,2.28-3.807,2.445c-0.953,0.092-1.95-0.107-2.873-0.57c0.505-0.168,0.995-0.378,1.448-0.646	c1.077-0.685,2.003-1.64,2.555-2.775c0.819-1.549,0.885-3.382,0.353-4.934c0.12-0.11,0.227-0.234,0.322-0.372	c0.981,0.59,1.73,1.414,2.163,2.366C28.657,29.057,28.56,30.762,27.807,32.091z M33.124,29.269c-0.397,0.871-1.067,1.635-1.93,2.203	c0.107-0.521,0.171-1.051,0.165-1.577c-0.055-1.275-0.419-2.554-1.126-3.6c-0.931-1.483-2.484-2.456-4.093-2.773	c-0.036-0.162-0.085-0.321-0.157-0.471c0.999-0.552,2.085-0.786,3.123-0.686c1.602,0.13,3.03,1.067,3.804,2.383	C33.716,26.073,33.792,27.782,33.124,29.269z" />
                                                </svg>
                                          </span>
                                    </button>
                              </a>
                        </div>
                        {/* trying to add sparkles */}
                        <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md -z-10">
                              <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0">

                                    {/* Core component */}
                                    <SparklesCore
                                          background="transparent"
                                          minSize={0.4}
                                          maxSize={1}
                                          particleDensity={50}
                                          className="w-full h-full"
                                          particleColor="#FFFFFF"
                                    />
                                    {/* Radial Gradient to prevent sharp edges */}
                                    {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
                                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(17,17,17,0.922986284357493)_88%)]"></div>
                              </div>
                        </div>
                  </section>
                  <section className="">
                        <div className="max-w-lg mx-auto">
                              <h3 className="w-full text-center text-3xl mt-32 mb-5">Some Of My Work</h3>
                              <hr />
                        </div>
                        <div className="container-projects grid grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
                              <div className="gradient-image rounded-lg overflow-hidden col-span-2 max-h-[450px] relative cursor-pointer">
                                    <a href="https://them7d.github.io/frontend-mentor/loopstudios-landing-page">
                                          <div className="gradient_div absolute bottom-0 top-0 right-0 left-0 bg-gradient-to-b z-10 from-transparent via-transparent to-black hover:via-80%">
                                                <div className="absolute bottom-5 left-5 text-lg">
                                                      Landing Page
                                                </div>
                                          </div>
                                          <Image src="/images/landing-page.jpg" className="max-w-full h-auto transition-all ease-linear duration-500 z-0" width={800} height={350} alt="langing page"></Image>
                                    </a>
                              </div>
                              <div className="gradient-image rounded-lg overflow-hidden col-span-2 max-h-[450px] relative cursor-pointer">
                                    <a href="https://them7d.github.io/frontend-mentor/sunnyside-agency-landing-page">
                                          <div className="gradient_div absolute bottom-0 top-0 right-0 left-0 bg-gradient-to-b z-10 from-transparent via-transparent to-black hover:via-80%">
                                                <div className="absolute bottom-5 left-5 text-lg">
                                                      Sunnyside Agency
                                                </div>
                                          </div>
                                          <Image src="/images/landing-page-sunnyside.jpg" className="max-w-full h-auto transition-all ease-linear duration-700" width={800} height={350} alt="langing page"></Image>
                                    </a>
                              </div>
                              <div className="rounded-lg hover:scale-[1.01] col-span-3 overflow-hidden max-h-[450px] relative cursor-pointer">
                                    <a href="https://them7d.github.io/frontend-mentor/social-media-dashboard">
                                          <div className="gradient_div absolute bottom-0 top-0 right-0 left-0 bg-gradient-to-b z-10 from-transparent via-transparent to-black hover:via-80%">
                                                <div className="absolute bottom-5 left-5 text-lg">
                                                      Dashboard
                                                </div>
                                          </div>
                                          <Image src="/images/dashboard.png" className="max-w-full h-auto hover:scale-100 transition-all ease-linear duration-700 w-full" width={1920} height={350} alt="langing page"></Image>
                                    </a>
                              </div>
                              <div className="rounded-lg hover:scale-[1.01] transition-all col-start-2 col-span-3 overflow-hidden max-h-[450px] relative cursor-pointer">
                                    <div className="gradient_div absolute bottom-0 top-0 right-0 left-0 bg-gradient-to-b z-10 from-transparent via-transparent to-black hover:via-80%">
                                          <div className="absolute bottom-5 left-5 text-lg">
                                                testimonials slider
                                          </div>
                                    </div>
                                    <a href="https://them7d.github.io/frontend-mentor/coding-bootcamp-testimonials-slider">
                                          <Image src="/images/testimonials.jpg" className="max-w-full h-auto transition-all ease-linear duration-700 w-full" width={1920} height={350} alt="langing page"></Image>
                                    </a>
                              </div>
                              <div></div>
                              <div></div>
                              <div></div>
                        </div>
                  </section>
            </>
      );
}
export default page;
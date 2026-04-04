import React from "react";
import images from "../../assets/Images/img";
import icons from "../../assets/icons/icon.js";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import CoursePdf from "../../assets/CourcesPDF/CoursePdf.js";
import { FaYoutube } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className="roboto pb-[80px] bg-[#FFFAF2] mx-auto">
      <div className="z-10">
        <div className="px-4 sm:px-6 lg:px-12">
          <div className="font-serif lg:text-[30px] sm:text-2xl text-base text-center text-primary font-semibold mb-8">
            Debt Collections & Revenue Management Videos Overview & Training
            Outline
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-4 w-full px-4  mb-8">
            {/* Video Card 1 */}
            <div
              className="w-full max-w-[700px] rounded-lg overflow-hidden shadow-[0_4px_40px_rgba(1,61,123,0.10)] bg-white p-4 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=vNS3Dse8lqM",
                  "_blank",
                )
              }
            >
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/IlTQvt5RPlM"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <h2 className="text-[18px] font-semibold text-primary">
                  The Gold Standard in Debt Recovery Management Training Courses: Cohen & Klein Consulting Recognition | Cohen & Klein Consulting, Inc.
                </h2>
                <p className="text-sm text-gray-600">
                  What does it take to become a top-tier debt collections and revenue management collections professional? In this video, Cohen & Klein Consulting, Inc. introduces the premier recognition and training standard by Cohen & Klein Consulting that is transforming the landscape of debt collections recovery and revenue management procedures.
                </p>
              </div>
            </div>

            <div
              className="w-full max-w-[410px] rounded-lg overflow-hidden shadow-[0_4px_40px_rgba(1,61,123,0.10)] bg-white p-4 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=vNS3Dse8lqM",
                  "_blank",
                )
              }
            >
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/vNS3Dse8lqM"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <h2 className="text-[18px] font-semibold text-primary">
                  Streamline Your Debt Collection & Revenue Department
                </h2>
                <p className="text-sm text-gray-600">
                  This video from Cohen & Klein Consulting, Inc. outlines their
                  comprehensive training courses designed to help private and
                  public sector institutions effectively handle delinquent
                  accounts. Whether you're dealing with government tax
                  collections, utility payments, or healthcare claims, this
                  training equips your staff—from new collectors to
                  management—with practical, ethical, and results-driven
                  strategies.
                </p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div
              className="w-full max-w-[410px] rounded-lg overflow-hidden shadow-[0_4px_40px_rgba(1,61,123,0.10)] bg-white p-4 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=Nbq82TIDBvw",
                  "_blank",
                )
              }
            >
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/Nbq82TIDBvw"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <h2 className="text-[18px] font-semibold text-primary">
                  Is your debt collection process proactive or reactive?
                </h2>
                <p className="text-sm text-gray-600">
                  Video 102 of our series, Cohen & Klein Consulting, Inc.
                  explores how to streamline and establish a highly effective
                  debt collections and revenue department. Uncollected accounts
                  don’t just sit idle—they grow more complex and harder to
                  resolve over time.
                </p>
              </div>
              
            </div>

            <div
              className="w-full max-w-[410px] rounded-lg overflow-hidden shadow-[0_4px_40px_rgba(1,61,123,0.10)] bg-white p-4 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=Nbq82TIDBvw",
                  "_blank",
                )
              }
            >
              <div className="relative h-[200px] rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/LQ6RsPs3c-A"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <h2 className="text-[18px] font-semibold text-primary">
                  Elevating Standards: National Social Insurance & Debt Collections Training | Cohen & Klein Consulting, Inc.
                </h2>
                <p className="text-sm text-gray-600">
                  Effective revenue recovery in the public sector requires more than just vague efforts—it requires specialized expertise, empathy, and strategic excellence. In this video, Cohen & Klein Consulting, takes you inside a specialized training programs hosted by Cohen & Klein Consulting, Inc.
                </p>
              </div>
              
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left column */}
            <div className="flex flex-col sm:gap-6 gap-3 lg:items-left items-left ">
              <div className=" flex gap-3 cursor-pointer items-center max-w-[660px] border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
                <Link
                  to="#"
                  className="text-[#021326] sm:text-[16px] text-xs tracking-[0.02em] "
                  onClick={() =>
                    window.open(CoursePdf.debtcolltraining, "_blank")
                  }
                >
                  Debt Collection and revenue management training testimonials
                  for banks and other financial institutions
                </Link>
                <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
              </div>
              <div className=" flex gap-3 items-center max-w-[660px] border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
                <Link
                  to="/debtcollinner"
                  className="text-[#021326] sm:text-[16px] text-xs tracking-[0.02em] "
                >
                  Inspiring Debt Collection and Revenue Management Training
                  Testimonials from Our Satisfied Clients
                </Link>
                <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col sm:gap-6 gap-3 ml-auto max-w-[660px]">
              <div className="  flex gap-3 items-center max-w-[660px]  border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
                <Link
                  to="/callinner"
                  className="text-[#021326] sm:text-[16px] text-xs tracking-[0.02em]"
                >
                  Authentic Call Center and Customer Service Training
                  Testimonials from Our Valued Clients
                </Link>
                <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
              </div>

              <div className="  flex gap-3 items-center max-w-[660px]  border-[1px] border-[#C2C2C2] px-5 py-4 rounded-xl bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]">
                <Link
                  to="#"
                  className="text-[#021326] sm:text-[16px] text-xs tracking-[0.02em] "
                  onClick={() =>
                    window.open(CoursePdf.Testimonials131412032026, "_blank")
                  }
                >
                  Debt Collections and Revenue Management Regional Training
                  Testimonials from our Valued Clients
                </Link>
                <IoIosLink className="text-[#039EFF] h-7 w-7 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex xl:flex-row flex-col mt-6 gap-10 md:px-15 justify-between items-start">
        <div className="flex flex-col justify-start">
          <div
            className="flex flex-col relative z-10 bg-white border-[2px] rounded-[10px] border-[#f8c67b] 2xl:p-3 lg:p-2 sm:p-4 p-2.5 gap-1 2xl:max-w-[510px] max-w-[460px] sm:mt-[99px] mt-10 lg:ml-[60px] items-center cursor-pointer"
            onClick={() => window.open(CoursePdf.debtcollectionpdf, "_blank")}
          >
            <div className="flex gap-x-2">
              <img src={images.pdf} alt="" className="max-w-15 h-13 m-auto" />
              <h6 className="text-primary leading-[23px] font-medium roboto-serif-font 2xl:text-[22px] sm:text-lg text-base">
                100+ Debt Collection & Revenue Management Training Courses
              </h6>
            </div>
          </div>
         <div className="flex flex-col gap-4 2xl:max-w-[510px] max-w-[460px] lg:ml-[60px] mt-4 px-1">
  <div className="flex flex-col gap-0">
  <p style={{ background: 'linear-gradient(135deg, #f9608a, #f0457a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} 
    className="2xl:text-2xl lg:text-2xl sm:text-base text-sm font-semibold roboto-serif-font text-center mx-auto leading-snug whitespace-nowrap">
    "The longer your delinquent accounts go uncollected,
  </p>
  <p style={{ background: 'linear-gradient(135deg, #f9608a, #f0457a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} 
    className="2xl:text-2xl lg:text-2xl sm:text-base text-sm font-semibold roboto-serif-font text-center mx-auto leading-snug whitespace-nowrap">
    the more difficult they will be to collect or recover"
  </p>
</div>
  <p style={{ background: 'linear-gradient(135deg, #4ecdc4, #45b89a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} 
  className="2xl:text-2xl lg:text-2xl sm:text-base text-sm font-semibold roboto-serif-font text-center mx-auto leading-snug whitespace-nowrap">
  This will be the case for private and public sector institutions.
</p>
</div>    
        </div>
        

        <div className="flex justify-center w-full xl:w-1/2">
          <div className="relative z-10 mt-[79px]">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={images.dotes}
                alt=""
                className="absolute top-[26px] left-[-20px]"
              />
              <img
                src={images.orangecircle}
                alt=""
                className="hidden sm:block absolute top-[110px] left-[90px] max-w-[370px]"
              />
            </div>
            <div
              className="relative z-10 bg-white shadow-[0_4px_40px_rgba(1,61,123,0.10)]
                    max-w-[345px] h-[252px] p-[20px]
                    flex flex-col rounded-[10px]"
            >
              <div className="pb-[20px] border-b-[2px] border-[rgba(0,0,0,0.1)]">
                <h3 className="text-primary text-[20px] font-semibold roboto-serif-font pb-[10px]">
                  Cohen & Klein Consulting
                </h3>

                <div className="flex items-center gap-[15px]">
                  <img
                    src={icons.many}
                    alt=""
                    className="px-[12px] py-[14px] bg-primary rounded-[10px]"
                  />
                  <img
                    src={icons.sixytythree}
                    alt=""
                    className="px-[12px] py-[14px] bg-primary rounded-[10px]"
                  />
                  <img
                    src={icons.img34}
                    alt=""
                    className="px-[12px] py-[14px] bg-primary rounded-[10px]"
                  />
                  <img
                    src={icons.thousand}
                    alt=""
                    className="px-[12px] py-[14px] bg-primary rounded-[10px]"
                  />
                </div>
              </div>

              <div className="mt-[20px]">
                <p className="text-[#021326]">You can Register through</p>
                <div className="flex gap-[15px] mt-[15px]">
                  <Link to="/registration?method=email">
                    <button className="px-[50px] py-[10px] bg-secondary rounded-[5px] text-white cursor-pointer">
                      Email
                    </button>
                  </Link>
                  <Link to="/registration?method=fax">
                    <button className="px-[50px] py-[10px] bg-primary rounded-[5px] text-white cursor-pointer">
                      By Fax
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      
    </div>
  );
};

export default Testimonial;
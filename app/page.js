import SmallCard from "@/components/SmallCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <title>Lancer</title>
      <div className="flex mx-20">
        <div className="w-50 mx-20 mt-20">
          <h1 className="text-7xl text-green-600 font-extrabold font-serif">
            How work <br /> should work
          </h1>
          <h2 className="text-xl my-10 font-medium font-serif">
            Forget the old rules. You can have the best people. <br /> Right
            now. Right here.
          </h2>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <Link href="/sign-up" className="text-xl font-medium">
              Get Started
            </Link>
          </button>
        </div>
        <div className="w-50">
          <img
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_580,h_580,f_auto,q_auto,dpr_2.0/brontes/hero/globe@1x.jpg"
            className="h-96 ml-80 mt-16"
            alt=""
          />
        </div>
      </div>
      <div className="mx-20">
        <div className="flex mx-10 mt-16">
          <div className=" text-bold mt-3 text-xl">As used by</div>
          <div className="mx-8">
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg"
              alt=""
            />
          </div>
          <div className="mx-8">
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg"
              alt=""
            />
          </div>
          <div className="mx-8">
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg"
              alt=""
            />
          </div>
          <div className="mx-8">
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo3.svg"
              className="h-10"
              alt=""
            />
          </div>
          <div className="mx-8">
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg"
              alt=""
            />
          </div>
          <div className="mx-8">
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/google-logo.svg"
              alt=""
            />
          </div>
          <div className="mx-8">
            <img
              src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/fujitsu-logo.svg"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="my-20">
          <h1 className="text-5xl font-bold mx-8">Need something done?</h1>
        </div>
        <div className="flex">
          <SmallCard
            imageUrl={
              "https://www.f-cdn.com/assets/main/en/assets/illustrations/project/post-a-project.svg"
            }
            head="Post a job"
            text={
              "It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes."
            }
          />
          <SmallCard
            imageUrl={
              "https://www.f-cdn.com/assets/main/en/assets/illustrations/freelancer/work.svg"
            }
            head={"Choose freelancers"}
            text={
              "No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!"
            }
          />
          <SmallCard
            imageUrl={
              "https://www.f-cdn.com/assets/main/en/assets/illustrations/payment/pay-safely.svg"
            }
            head={"Pay safely"}
            text={
              "Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system."
            }
          />
          <SmallCard
            imageUrl={
              "https://www.f-cdn.com/assets/main/en/assets/illustrations/freelancer/about-me.svg"
            }
            head={"We’re here to help"}
            text={
              "Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you."
            }
          />
        </div>
        <hr />
        <div className="my-20">
          <h1 className="text-5xl font-bold mx-8">What's great about it?</h1>
        </div>
        <div className="flex">
          <SmallCard
            imageUrl={
              "https://www.f-cdn.com/assets/main/en/assets/illustrations/portfolio/browse-portfolios.svg"
            }
            head={"Browse portfolios"}
            text={
              "Find professionals you can trust by browsing their samples of previous work and reading their profile reviews."
            }
          />
          <SmallCard
            imageUrl={
              "https://www.f-cdn.com/assets/main/en/assets/illustrations/bids/bids-alt.svg"
            }
            head={"Fast bids"}
            text={
              "Receive obligation free quotes from our talented freelancers fast. 80% of projects get bid on within 60 seconds."
            }
          />
          <SmallCard
            imageUrl={
              "https://www.f-cdn.com/assets/main/en/assets/illustrations/quality-rewards/rank-higher.svg"
            }
            head={"Quality work"}
            text={
              "Freelancer.com has by far the largest pool of quality freelancers globally- over 60 million to choose from."
            }
          />
          <SmallCard
            imageUrl={
              "https://www.f-cdn.com/assets/main/en/assets/illustrations/time/track-progress.svg"
            }
            head={"Track progress"}
            text={
              "Keep up-to-date and on-the-go with our time tracker, and mobile app. Always know what freelancers are up to."
            }
          />
        </div>
      </div>
    </>
  );
}

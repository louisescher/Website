import Button from "@/components/Button";
import { WhiteLogo } from "@/components/C.S Logos";
import { Envelope, GitHubLogo } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <div className="h-4/5 mb-[20%] w-[90%] mx-auto flex flex-row items-center justify-center">
        <div className="w-1/2 h-full mr-2 relative flex items-center">
          <div className="!m-auto relative w-2/3">
            <span className="text-3xl stretch-text font block mb-2 landing-hello-world-text">hello world</span>
            <span className="text-6xl stretch-text font-semibold">I'm <span className="font-extrabold">Spirit</span></span>
            <hr className="my-2" />
            <span className="text-2xl">I'm a 16 year old developer living in Germany.</span>
            <div className="flex flex-row items-center mt-2">
              <Button isLink href={'https://github.com/SpiritLetsPlays'} className={'mr-1'}>
                <GitHubLogo className={'h-6 w-6 mr-1.5'} />
                <span className="text-lg relative top-px">GitHub</span>
              </Button>
              <Button isLink href={'mailto:dev@codedotspirit.dev'} className={'ml-1'}>
                <Envelope className={'h-6 w-6 mr-1.5'} />
                <span className="text-lg relative top-px">Mail</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full ml-2 flex justify-center items-center">
          <div className="h-1/2">
            <WhiteLogo className={"w-full h-full landing-logo"} />
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-row items-center justify-center">
        Amogus
      </div>
    </>
  )
}
import DockerLogo from "@/icons/DockerLogo";
import GitHubLogo from "@/icons/GitHubLogo";
import LinuxLogo from "@/icons/LinuxLogo";
import VSCodeIcon from "@/icons/VSCodeIcon";
import Windows11Logo from "@/icons/Windows11Logo";

export default function ToolIcon({ name }) {
  if(!name) return;

  const nameLookup = {
    docker: <DockerLogo />,
    github: <GitHubLogo />,
    linux: <LinuxLogo />,
    vscode: <VSCodeIcon />,
    windows: <Windows11Logo />,
  };

  return (
    <>
      <div className="tool-icon text-center">
        {nameLookup[name]}
        <p className="tool-name text-base">{name}</p>
      </div>
    </>
  )
}
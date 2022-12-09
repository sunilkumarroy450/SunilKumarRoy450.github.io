import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import React from "react";
import { MainHeadingWrapper } from "../Elements/Elements";

function GithubStats() {
  return (
    <div style={{ backgroundColor: "#000000", border: "none" }}>
      <MainHeadingWrapper>
        <h1 style={{ color: "#ffffff" }}>Github Calendar</h1>
        <div></div>

        <GitHubCalendar
          style={{ margin: "auto", width: "100%" }}
          username="SunilKumarRoy450"
          children={<ReactTooltip html />}
        />
      </MainHeadingWrapper>
      <div>
        <iframe
          src="https://github-readme-stats.vercel.app/api?username=SunilKumarRoy450&show_icons=true&theme=tokyonight"
          frameborder="0"
        ></iframe>
        <iframe
          src="https://github-readme-streak-stats.herokuapp.com?user=SunilKumarRoy450&theme=tokyonight"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}
export { GithubStats };

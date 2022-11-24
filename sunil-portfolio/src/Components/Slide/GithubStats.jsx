import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

import React from 'react'

function GithubStats  () {
  return (
    <GitHubCalendar
            username="singh-govind"
            children={<ReactTooltip html />}
          />
  )
}
export {GithubStats}

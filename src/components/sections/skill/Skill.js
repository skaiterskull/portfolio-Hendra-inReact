import React from "react";
import { SectionTitle } from "../../section-title/SectionTitle";

export const Skill = () => {
  return (
    <div id="skill" className="py-5">
      <SectionTitle title="Skills" />;
      <div class="skills-list fs-3 fw-bold d-flex justify-content-between mt-4 flex-wrap flex-row">
        <div>
          <i class="fab fa-html5 text-primary">HTML</i>
        </div>
        <div>
          <i class="fab fa-css3-alt text-danger">CSS</i>
        </div>
        <div>
          <i class="fab fa-js-square text-warning">JS</i>
        </div>
        <div>
          <i class="fab fa-react text-primary">React</i>
        </div>
        <div>
          <i class="fab fa-node-js text-success">Node</i>
        </div>
        <div>
          <i class="fab fa-html5">MDB</i>
        </div>
      </div>
    </div>
  );
};

// src/data/GameProjectsData.ts
import ProjectData from '@/data/ProjectData.ts'

export default [
  // Shores Unknown — big
  new ProjectData(
    "project-shores",
    "Shores Unknown",
    "img/projects/project-shores-icon.jpg",
    `
    <div class="paragraph">
      <strong>Shores Unknown</strong> is a tactical RPG developed in Unreal Engine with a small distributed team.
      I led design and implementation across core systems, combat, and content integration.
    </div>

    <div class="paragraph">
      <ul>
        <li>Unreal Engine (UE4) gameplay framework and tools</li>
        <li>Turn-based combat rules, AI behaviors, encounter scripting</li>
        <li>Quest, inventory, and narrative integration</li>
      </ul>
    </div>

    <div class="paragraph notice">
      <em>Notes:</em> Solo/lead role on systems and content; shipped on PC (Steam).
    </div>
    `,
    "#5a78af", // accent color — tweak as you like
    true       // featured
  ),

  // Flintlock — big
  new ProjectData(
    "project-flintlock",
    "Flintlock: The Siege of Dawn",
    "img/projects/project-flintlock-icon.jpg",
    `
    <div class="paragraph">
      <strong>Flintlock: The Siege of Dawn</strong> (Action RPG). Contributed to combat and enemy design,
      focusing on readability, AI behavior tuning, and encounter pacing.
    </div>

    <div class="paragraph">
      <ul>
        <li>Enemy move sets, timings, and telegraphing</li>
        <li>Boss/elite encounter tuning and iteration</li>
        <li>Cross-discipline collaboration with animation and engineering</li>
      </ul>
    </div>
    `,
    "#23bd69",
    true
  ),

  // Rocksmith+ — medium
  new ProjectData(
    "project-rocksmith",
    "Rocksmith+",
    "img/projects/project-rocksmith-icon.jpg",
    `
    <div class="paragraph">
      <strong>Rocksmith+</strong>. Design contributions on features and flows supporting the learning experience.
    </div>
    <div class="paragraph">
      <ul>
        <li>Systems/UX support for practice flows</li>
        <li>Specification, iteration, and polish with engineering/UI</li>
      </ul>
    </div>
    `,
    "#e48246"
  ),

  // Other experience — misc
  new ProjectData(
    "project-others",
    "Other Projects (Mobile & Browser)",
    "img/projects/project-others-icon.jpg",
    `
    <div class="paragraph">
      A selection of smaller mobile and browser projects I contributed to (systems, level/puzzle design, live-ops support).
    </div>
    <div class="paragraph">
      <ul>
        <li>Gameplay prototyping and content implementation</li>
        <li>Economy/balance passes for live titles</li>
        <li>Event/puzzle design and tooling</li>
      </ul>
    </div>
    `,
    "#383838"
  )
]

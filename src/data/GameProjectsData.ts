// src/data/GameProjectsData.ts
import ProjectData from '@/data/ProjectData.ts'

type LocalizedProject = ProjectData & {
  nameEn?: string;
  nameJa?: string;
  htmlEn?: string;
  htmlJa?: string;
};

const shores: LocalizedProject = Object.assign(
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
        <li>UE4 gameplay framework & tools</li>
        <li>Turn-based combat rules, AI, encounter scripting</li>
        <li>Quest, inventory, narrative integration</li>
      </ul>
    </div>
    `,
    "#5a78af",
    true
  ),
  {
    nameEn: "Shores Unknown",
    nameJa: "Shores Unknown",
    htmlEn: `
      <div class="paragraph">
        <strong>Shores Unknown</strong> is a tactical RPG developed in Unreal Engine with a small distributed team.
        I led design and implementation across core systems, combat, and content integration.
      </div>
      <div class="paragraph">
        <ul>
          <li>UE4 gameplay framework & tools</li>
          <li>Turn-based combat rules, AI, encounter scripting</li>
          <li>Quest, inventory, narrative integration</li>
        </ul>
      </div>
    `,
    htmlJa: `
      <div class="paragraph">
        <strong>Shores Unknown</strong> は、少人数の分散チームでUnreal Engineを使って開発したタクティカルRPGです。
        コアシステム、戦闘、コンテンツ実装まで幅広く担当しました。
      </div>
      <div class="paragraph">
        <ul>
          <li>UE4のゲームプレイ基盤とツール</li>
          <li>ターン制戦闘のルール設計、AI、エンカウント作成</li>
          <li>クエスト／インベントリ／ナラティブ連携</li>
        </ul>
      </div>
    `
  }
);

const flint: LocalizedProject = Object.assign(
  new ProjectData(
    "project-flintlock",
    "Flintlock: The Siege of Dawn",
    "img/projects/project-flintlock-icon.jpg",
    `
    <div class="paragraph">
      <strong>Flintlock: The Siege of Dawn</strong> (Action RPG). Contributed to combat and enemy design,
      focusing on readability, AI tuning, and encounter pacing.
    </div>
    <div class="paragraph">
      <ul>
        <li>Enemy move sets, timings, telegraphing</li>
        <li>Boss/elite encounter iteration & tuning</li>
        <li>Collaboration with animation & engineering</li>
      </ul>
    </div>
    `,
    "#23bd69",
    true
  ),
  {
    nameEn: "Flintlock: The Siege of Dawn",
    nameJa: "Flintlock: The Siege of Dawn",
    htmlEn: `
      <div class="paragraph">
        <strong>Flintlock: The Siege of Dawn</strong> (Action RPG). Contributed to combat and enemy design,
        focusing on readability, AI tuning, and encounter pacing.
      </div>
      <div class="paragraph">
        <ul>
          <li>Enemy move sets, timings, telegraphing</li>
          <li>Boss/elite encounter iteration & tuning</li>
          <li>Collaboration with animation & engineering</li>
        </ul>
      </div>
    `,
    htmlJa: `
      <div class="paragraph">
        <strong>Flintlock: The Siege of Dawn</strong>（アクションRPG）。戦闘と敵の設計に貢献し、見やすさやAI調整、エンカウントのテンポを重視して制作しました。
      </div>
      <div class="paragraph">
        <ul>
          <li>敵のモーションセット・タイミング・テレグラフ設計</li>
          <li>ボス／エリート戦の反復調整</li>
          <li>アニメーション／エンジニアリングとの連携</li>
        </ul>
      </div>
    `
  }
);

const rock: LocalizedProject = Object.assign(
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
        <li>Practice flow UX/system support</li>
        <li>Specs, iteration, and polish with eng/UI</li>
      </ul>
    </div>
    `,
    "#e48246"
  ),
  {
    nameEn: "Rocksmith+",
    nameJa: "Rocksmith+",
    htmlEn: `
      <div class="paragraph">
        <strong>Rocksmith+</strong>. Design contributions on features and flows supporting the learning experience.
      </div>
      <div class="paragraph">
        <ul>
          <li>Practice flow UX/system support</li>
          <li>Specs, iteration, and polish with eng/UI</li>
        </ul>
      </div>
    `,
    htmlJa: `
      <div class="paragraph">
        <strong>Rocksmith+</strong>。学習体験を支える機能やフローの設計に携わりました。
      </div>
      <div class="paragraph">
        <ul>
          <li>練習フローのUX／システム支援</li>
          <li>仕様策定、反復、UI／エンジニアとの磨き込み</li>
        </ul>
      </div>
    `
  }
);

const misc: LocalizedProject = Object.assign(
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
        <li>Gameplay prototyping & content implementation</li>
        <li>Balance passes for live titles</li>
        <li>Event/puzzle design and tooling</li>
      </ul>
    </div>
    `,
    "#383838"
  ),
  {
    nameEn: "Other Projects (Mobile & Browser)",
    nameJa: "その他（モバイル／ブラウザ）",
    htmlEn: `
      <div class="paragraph">
        A selection of smaller mobile and browser projects I contributed to (systems, level/puzzle design, live-ops support).
      </div>
      <div class="paragraph">
        <ul>
          <li>Gameplay prototyping & content implementation</li>
          <li>Balance passes for live titles</li>
          <li>Event/puzzle design and tooling</li>
        </ul>
      </div>
    `,
    htmlJa: `
      <div class="paragraph">
        小規模なモバイル／ブラウザ向けタイトルの実装や調整に関わりました（システム、レベル／パズル設計、運用サポートなど）。
      </div>
      <div class="paragraph">
        <ul>
          <li>ゲームプレイ試作とコンテンツ実装</li>
          <li>運用タイトルのバランス調整</li>
          <li>イベント／パズル設計とツール整備</li>
        </ul>
      </div>
    `
  }
);

export default [shores, flint, rock, misc];

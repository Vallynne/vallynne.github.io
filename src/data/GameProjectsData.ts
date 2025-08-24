// src/data/GameProjectsData.ts
import ProjectData from '@/data/ProjectData.ts'

type LocalizedProject = ProjectData & {
  nameEn?: string;
  nameJa?: string;
  htmlEn?: string;
  htmlJa?: string;
};

// --- Shores Unknown ---
const shores: LocalizedProject = Object.assign(
  new ProjectData(
    "project-shores",
    "Shores Unknown",
    "img/projects/project-shores-icon.jpg",
    "", // fallback
    "#5a78af",
    true
  ),
  {
    nameEn: "Shores Unknown",
    nameJa: "Shores Unknown",
    htmlEn: `
      <div class="paragraph notice">
        <a target="_blank" href="https://store.steampowered.com/app/899460/Shores_Unknown/">
          <strong>🌊 Shores Unknown on Steam</strong>
        </a>
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/7vIEv6G1f_A" frameborder="0" allowfullscreen></iframe>
        <p><em>Early Access Trailer</em></p>
      </div>

      <div class="paragraph">
        <strong>Shores Unknown</strong> is a tactical RPG developed in Unreal Engine 4 with a small distributed team.
        I was responsible for nearly all core <strong>systems and mechanics</strong> of the game, including the
        <strong>turn-based combat system</strong>, <strong>enemy AI behaviors</strong>, <strong>exploration gameplay and interactions</strong>,
        <strong>character progression</strong>, and <strong>combat encounter setup</strong>.
      </div>

      <div class="subtitle">
        📄 Combat Case Study (English PDF)
      </div>

      <div class="paragraph center">
        <a
          class="download-btn"
          href="/doc/Shores-Combat-Case-Study.pdf"
          target="_blank"
          rel="noopener"
        >
          📥 Download: Shores Unknown — Combat Case Study (PDF)
        </a>
      </div>

      <div class="paragraph">
        Most of the implementation was done in <strong>Unreal Engine Blueprints (~95%)</strong>, with supporting C++ used for
        data management, custom structures, saving/loading, and editor extensions—enabling fast iteration with a maintainable core.
      </div>

      <div class="paragraph">
        <strong>Features:</strong>
        <ul>
          <li>Gridless tactical turn-based combat with automatic character positioning</li>
          <li>Character-driven story with branching choices</li>
          <li>Adaptive advancement: learn skills and unlock classes based on equipment and combat style</li>
          <li>Stylized low-poly world with exploration, quests, and enemies; ~20–30 hours per playthrough</li>
        </ul>
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/U5fFY3Xc3mc" frameborder="0" allowfullscreen></iframe>
        <p><em>Combat Showcase: Group Battle</em></p>
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/nTImLlThkcI" frameborder="0" allowfullscreen></iframe>
        <p><em>Combat Showcase: Human Boss Encounter</em></p>
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/oz1Vpt-x2UE" frameborder="0" allowfullscreen></iframe>
        <p><em>Combat Showcase: Creature Boss (summons adds)</em></p>
      </div>

      <div class="paragraph">
        I also had an opportunity to share my experiences making the game:
        <ul>
          <li><a target="_blank" href="https://80.lv/articles/80-level-game-deep-dive-x-indie-cup-shores-unknown">80 Level Game Deep Dive x Indie Cup: Shores Unknown</a> (April 2021, English)</li>
          <li><a target="_blank" href="https://unrealengine.jp/unrealfest/extreme2021winter/timetable/game-vallynne.html">Unreal Fest Japan 2021 Winter</a>: “Smart Development with a Small Team and Low Budget” (Nov 2021, Japanese)</li>
        </ul>
      </div>
    `,
    htmlJa: `
      <div class="paragraph notice">
        <a target="_blank" href="https://store.steampowered.com/app/899460/Shores_Unknown/">
          <strong>🌊 『Shores Unknown』 Steam ストアページ</strong>
        </a>
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/7vIEv6G1f_A" frameborder="0" allowfullscreen></iframe>
        <p><em>アーリーアクセス・トレーラー</em></p>
      </div>

      <div class="paragraph">
        <strong>Shores Unknown</strong> は、少人数の国際チームでUnreal Engine 4を用いて開発したタクティカルRPGです。
        <strong>ターン制戦闘</strong>、<strong>敵AIの行動</strong>、<strong>探索のゲームプレイとインタラクション</strong>、<strong>キャラクター成長</strong>、
        <strong>戦闘エンカウントの構築</strong> など、ゲームの中核となるシステム／メカニクス全般をほぼ担当しました。
      </div>

      <div class="subtitle">
        📄 戦闘ケーススタディ（英語PDF）
      </div>

      <div class="paragraph center">
        <a
          class="download-btn"
          href="/doc/Shores-Combat-Case-Study.pdf"
          target="_blank"
          rel="noopener"
        >
          📥 ダウンロード：『Shores Unknown』戦闘ケーススタディ（PDF）
        </a>
      </div>

      <div class="paragraph">
        実装の大部分は <strong>Unreal EngineのBlueprint（約95%）</strong> で行い、C++ はデータ管理、カスタム構造体、セーブ／ロード、エディタ拡張などの補助に使用。
        これにより、迅速な反復と保守しやすい基盤の両立を実現しました。
      </div>

      <div class="paragraph">
        <strong>主な特徴：</strong>
        <ul>
          <li>自動ポジショニングを備えた、マス目のないタクティカルなターン制バトル</li>
          <li>分岐のあるキャラクター主導の物語</li>
          <li>装備や戦い方に応じてスキル習得やクラス解放が進む、適応型の成長システム</li>
          <li>ローポリのスタイライズ表現で描く世界。探索・クエスト・敵との戦い／1周あたり約20〜30時間</li>
        </ul>
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/U5fFY3Xc3mc" frameborder="0" allowfullscreen></iframe>
        <p><em>戦闘デモ：グループ戦</em></p>
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/nTImLlThkcI" frameborder="0" allowfullscreen></iframe>
        <p><em>戦闘デモ：人間型ボス戦</em></p>
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/oz1Vpt-x2UE" frameborder="0" allowfullscreen></iframe>
        <p><em>戦闘デモ：クリーチャーボス（召喚あり）</em></p>
      </div>

      <div class="paragraph">
        制作の経験については、以下の講演でも紹介しています：
        <ul>
          <li><a target="_blank" href="https://80.lv/articles/80-level-game-deep-dive-x-indie-cup-shores-unknown">80 Level Game Deep Dive x Indie Cup: Shores Unknown</a>（2021年4月・英語）</li>
          <li><a target="_blank" href="https://unrealengine.jp/unrealfest/extreme2021winter/timetable/game-vallynne.html">Unreal Fest Japan 2021 Winter</a>：「少人数と低予算で賢く開発！」（2021年11月・日本語）</li>
        </ul>
      </div>
    `
  }
);

// --- Flintlock ---
const flint: LocalizedProject = Object.assign(
  new ProjectData("project-flintlock", "Flintlock: The Siege of Dawn", "img/projects/project-flintlock-icon.jpg", "", "#23bd69", true),
  {
    nameEn: "Flintlock: The Siege of Dawn",
    nameJa: "Flintlock: The Siege of Dawn",
    htmlEn: "<div class='paragraph'><strong>Flintlock: The Siege of Dawn</strong> – Contributed to combat and enemy design, focusing on AI behaviors, readability, and encounter pacing.</div>",
    htmlJa: "<div class='paragraph'><strong>Flintlock: The Siege of Dawn</strong> – 戦闘と敵の設計に貢献。AI挙動、見やすさ、エンカウントのテンポ調整を担当しました。</div>"
  }
);

// --- Rocksmith+ ---
const rock: LocalizedProject = Object.assign(
  new ProjectData("project-rocksmith", "Rocksmith+", "img/projects/project-rocksmith-icon.jpg", "", "#e48246"),
  {
    nameEn: "Rocksmith+",
    nameJa: "Rocksmith+",
    htmlEn: "<div class='paragraph'><strong>Rocksmith+</strong> – Supported UX/system design for practice flows, specs, and iteration with engineering/UI teams.</div>",
    htmlJa: "<div class='paragraph'><strong>Rocksmith+</strong> – 練習フローのUX／システム設計を支援し、仕様策定やエンジニア／UIとの反復調整を行いました。</div>"
  }
);

// --- Other Projects ---
const misc: LocalizedProject = Object.assign(
  new ProjectData("project-others", "Other Projects (Mobile & Browser)", "img/projects/project-others-icon.jpg", "", "#383838"),
  {
    nameEn: "Other Projects (Mobile & Browser)",
    nameJa: "その他（モバイル／ブラウザ）",
    htmlEn: "<div class='paragraph'>Various smaller projects including mobile and browser games, focusing on systems, balance, and puzzle/level design.</div>",
    htmlJa: "<div class='paragraph'>モバイル／ブラウザ向けの小規模プロジェクトに携わり、システム設計、バランス調整、パズル／レベルデザインなどを担当しました。</div>"
  }
);

export default [shores, flint, rock, misc];

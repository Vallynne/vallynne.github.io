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
        <strong>Developer:</strong> Vallynne<br>
        <strong>Role:</strong> Game Director / Game Designer / Programmer<br>
        <strong>Platforms:</strong> PC (Early Access), Nintendo Switch (Unreleased)
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
        <br>
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
        <strong>I also ported the project to Nintendo Switch myself</strong>, adapting UI and control scheme for the platform,
        and performing performance optimization to ensure stable 30 fps in the majority of gameplay scenarios.
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
          <strong>開発：</strong> Vallynne<br>
          <strong>役割：</strong> ゲームディレクター／ゲームデザイナー／プログラマー<br>
          <strong>対応プラットフォーム：</strong> PC（アーリーアクセス）、Nintendo Switch（未発売）
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
        <br>
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
        これにより、迅速な反復と保守しやすい基盤の両立を実現しました。さらに、<strong>Nintendo Switch への移植も自ら担当</strong>し、
        UIと操作体系の適応を行い、安定した30fpsを大半のゲームプレイシーンで実現するためのパフォーマンス最適化を行いました。
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


// --- Flintlock: The Siege of Dawn ---
const flint: LocalizedProject = Object.assign(
  new ProjectData(
    "project-flintlock",
    "Flintlock: The Siege of Dawn",
    "img/projects/project-flintlock-icon.jpg",
    "",
    "#23bd69",
    true
  ),
  {
    nameEn: "Flintlock: The Siege of Dawn",
    nameJa: "Flintlock: The Siege of Dawn",
    htmlEn: `
        <div class="paragraph notice">
          <strong>Developer:</strong> A44 Games (in collaboration with Shapefarm)<br>
          <strong>Role:</strong> Senior Technical Designer / Combat Designer<br>
          <strong>Platforms:</strong> PlayStation 5, Xbox Series X|S, PC
        </div>

        <div class="paragraph center">
          <iframe class="youtube" src="https://www.youtube.com/embed/RUVkGaAW-8w" frameborder="0" allowfullscreen></iframe>
          <p><em>Official Trailer</em></p>
        </div>

        <div class="paragraph">
          <strong>Flintlock: The Siege of Dawn</strong> is a souls-lite action RPG where humanity wages war against the gods. As Nor Vanek, joined by her mystical companion Enki, you’ll carve a path through an open world torn between magic and gunpowder. The game combines punishing encounters with cinematic storytelling and approachable design, offering an epic fight for survival and vengeance.
        </div>

        <div class="paragraph">
          <strong>Features:</strong>
          <ul>
            <li>Fast-paced action combat that blends melee, firearms, and magic.</li>
            <li>Combo-driven battles with mobility and evasive options.</li>
            <li>Use explosive abilities for vertical movement and aerial attacks.</li>
            <li>Explore varied environments filled with enemies and challenges.</li>
            <li>Collect equipment, strengthen weapons, and upgrade gear.</li>
          </ul>
        </div>

      <div class="paragraph">
        I owned combat behavior and design for many enemies and bosses (including the Act 1 boss <strong>Justice</strong> and the final boss).
        I designed and tuned <strong>enemy movesets & mechanics</strong>, collaborated with <strong>animation/VFX</strong> for readability,
        implemented abilities in <strong>Unreal Engine 4</strong> using <strong>Blueprint / Gameplay Ability System</strong>, and handled
        <strong>encounter placement & tuning</strong> across multiple locations.
        Each enemy had to meet a quality bar suitable for the final game — enemies that didn’t were cut.
      </div>


        <h2>Boss & Enemy Design</h2>

        <div class="two-col">
        <div class="text">
            <h3>Justice (Act 1 Boss)</h3>
            <ul>
            <li>The first major story boss with significant buildup.</li>
            <li>Challenges the player's mastery of the <strong>Priming</strong> mechanic — the boss has armor layers that must be removed by fully filling the <strong>purple Priming meter</strong>.</li>
            <li>Three arms and dancer-like motion → mix of parryable/unparryable attacks that escalate as armor is stripped, culminating in a third phase.</li>
            <li>Tests player <strong>parry/pistol interrupt</strong> skills in an interlude where she repositions and charges an attack that can only be stopped with pistol fire.</li>
            <li>Supports firearm-heavy play: head weak spot offers high reward for skilled shooters.</li>
            <li>Features a unique <strong>triple parry</strong> mechanic — a rhythmic minigame requiring three successive parries.</li>
            <li>Cinematic focus, tuned to be threatening but not overly punishing on Normal.</li>
            </ul>
        </div>
        <div class="video">
            <iframe class="youtube" src="https://www.youtube.com/embed/dnVaZTyb4AY" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>

        <div class="two-col">
        <div class="text">
            <h3>Stone Herald (Optional Early Boss)</h3>
            <ul>
            <li>Challenging optional early-game fight; very tough if attempted immediately when available.</li>
            <li>No new animation budget, so I reused two-handed warrior assets and built identity through <strong>parryable/unblockable</strong> combos and timings.</li>
            <li>Simple to understand mechanics but <strong>difficult timing</strong> and constant pressure — intended to internalize parry and pistol interrupt mechanics and punish hasty decisions.</li>
            <li>Priming takes a backseat — the boss resists it and cannot be stripped, but full priming still grants bonus damage windows.</li>
            </ul>
        </div>
        <div class="video">
            <iframe class="youtube" src="https://www.youtube.com/embed/zhFt5kx3iZk" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>

        <div class="two-col">
        <div class="text">
            <h3>Ekhagrrii (Dark Nor) — Mid-game Boss</h3>
            <ul>
            <li>A magically enhanced <strong>mirror enemy</strong> — a dark copy using many of the player’s own abilities.</li>
            <li>Phase 1 is lighter for the story twist; upon “defeat,” she revives empowered and the fight escalates.</li>
            <li>Phase 2 unlocks teleportation, area attacks, and enhanced combos.</li>
            <li>Unique twist: she can use the player’s parry attack ability. To keep it fair, it starts from block and requires two player hits to trigger—punishing over-commitment while creating windows to heal, reposition, or shoot.</li>
            </ul>
        </div>
        <div class="video">
            <iframe class="youtube" src="https://www.youtube.com/embed/iZpX5J6r-vo" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>

        <h2>Encounter Design</h2>

        <div class="two-col">
        <div class="text">
            <h3>Hamlet Liberation — First Anchor</h3>
            <ul>
            <li>Non-linear area with multiple approach routes to the boss.</li>
            <li>As the first Act 2 area, introduces new enemy types and a new mini-boss to create a deliberate difficulty spike.</li>
            <li>Direct assault is risky: rooftop snipers and hidden ambushes (undead can feign death).</li>
            <li>Owned enemy placement, ambushes, patrols; tuned AI and movesets.</li>
            <li>Placed rewards (crafting materials, Reputation pickups).</li>
            </ul>
        </div>
        <div class="video">
            <iframe class="youtube" src="https://www.youtube.com/embed/wAJ0A7wfAPE" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>

        <div class="two-col">
        <div class="text">
            <h3>Optional Area — Sibyl's Teeth</h3>
            <ul>
            <li>Missable, highly vertical and non-linear space encouraging player acrobatics.</li>
            <li>Designed enemy placement, ambushes, patrols; tuned AI and encounter pacing.</li>
            <li>By this stage players have strong tools (bombs, guns), so encounters combine enemy types and elevation to challenge without unfairness.</li>
            </ul>
        </div>
        <div class="video">
            <iframe class="youtube" src="https://www.youtube.com/embed/175oGxOZtdA" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>
    `,
    htmlJa: `
        <div class="paragraph notice">
          <strong>開発：</strong> A44 Games（Shapefarmと協業）<br>
          <strong>役割：</strong> シニア・テクニカルデザイナー／コンバットデザイナー<br>
          <strong>対応プラットフォーム：</strong> PlayStation 5、Xbox Series X|S、PC
        </div>

        <div class="paragraph center">
          <iframe class="youtube" src="https://www.youtube.com/embed/RUVkGaAW-8w" frameborder="0" allowfullscreen></iframe>
          <p><em>公式トレーラー</em></p>
        </div>

        <div class="paragraph">
          <strong>『Flintlock: The Siege of Dawn』</strong>は、人類と神々の戦いを描くソウルライク寄りのアクションRPGです。主人公ノールと魔法の相棒エンキが、魔法と火薬が交錯する世界を旅し、神々やアンデッドに挑みます。手応えのある戦闘とシネマティックな物語体験を融合させ、壮大な復讐の物語を描きます。
        </div>

        <div class="paragraph">
          <strong>主な特徴：</strong>
          <ul>
            <li><strong>近接・銃・魔法</strong>を組み合わせたスピーディーなアクション戦闘。</li>
            <li>コンボ主体のバトルと多彩な回避・機動アクション。</li>
            <li><strong>爆発系アビリティ</strong>を使った垂直移動や空中攻撃。</li>
            <li>多様な環境を探索し、敵との戦闘やチャレンジに挑戦。</li>
            <li>装備を集め、武器を強化し、ギアをアップグレード可能。</li>
          </ul>
        </div>

        <div class="paragraph">
          多数の敵やボス（Act1のボス<strong>Justice</strong>や最終ボスなど）の戦闘挙動とデザインを担当しました。
          <strong>敵のモーション／メカニクス設計</strong>、<strong>アニメーション／VFX</strong>との協業による可読性調整、
          <strong>Unreal Engine 4</strong>上での<strong>Blueprint／Gameplay Ability System</strong>による実装、
          複数ロケーションでの<strong>エンカウント配置とチューニング</strong>を実施。
          各敵は<strong>最終版に採用できる品質水準</strong>に到達することが求められ、基準を満たさないものはカットされました。
        </div>

        <h2>ボス・敵デザイン</h2>

        <div class="two-col">
        <div class="text">
            <h3>Justice（Act1ボス）</h3>
            <ul>
            <li>物語上の最初のメインボスで、大きな伏線と演出を伴う存在。</li>
            <li><strong>Priming（下準備）</strong>の習熟度を試す戦闘。<strong>紫の下準備ゲージ</strong>を満たして装甲を段階的に剥がす必要があります。</li>
            <li>三本の腕と舞踏のような動きに基づく攻撃。装甲が剥がれるにつれて激化し、最終の第3フェーズに至る。</li>
            <li>インタールードでは<strong>パリィ／ピストル割り込み</strong>の熟達度をテスト。ボスがアリーナを移動しながら大技を溜め、<strong>銃での阻止が必須</strong>。</li>
            <li>頭部に弱点があり、射撃寄りのプレイスタイルを支援（上手い射撃に高いリワード）。</li>
            <li>独自の<strong>三連続パリィ</strong>ギミック（3本腕に由来）。リズム良く3回成功させる必要がある。</li>
            <li>シネマティックな迫力を持ちながら、ノーマルでは理不尽にならないよう調整。</li>
            </ul>
        </div>
        <div class="video">
            <iframe class="youtube" src="https://www.youtube.com/embed/dnVaZTyb4AY" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>

        <div class="two-col">
        <div class="text">
            <h3>Stone Herald（任意ボス）</h3>
            <ul>
            <li>序盤から挑戦可能だが、解放直後に挑むと非常に手強い戦闘。</li>
            <li>新規モーション予算がなく、既存の両手武器モーションを活用。<strong>パリィ／アンブロッカブル</strong>の組み合わせとタイミングで個性を構築。</li>
            <li>理解しやすいメカニクスだが<strong>タイミングが難しく</strong>、常にプレッシャーがかかる設計。<strong>パリィとピストル割り込みを身体で覚えさせ</strong>、拙速な判断を罰する意図があります。</li>
            <li><strong>下準備</strong>は抑制され装甲も剥がれないが、フル下準備時には追加ダメージのチャンスが生まれる。</li>
            </ul>
        </div>
        <div class="video">
            <iframe class="youtube" src="https://www.youtube.com/embed/zhFt5kx3iZk" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>

        <div class="two-col">
        <div class="text">
            <h3>Ekhagrrii（ダークNor／中盤ボス）</h3>
            <ul>
            <li>主人公の能力を映す<strong>ミラーエネミー</strong>として登場し、プレイヤーと同系統のアビリティを使用。</li>
            <li>フェーズ1は物語上の転換導入として難度を抑制。0HP到達後に復活・強化され、戦闘がエスカレート。</li>
            <li>フェーズ2ではテレポートや範囲攻撃を解禁し、コンボも強化。</li>
            <li>ユニーク要素：プレイヤーの<strong>パリィ攻撃</strong>を逆用可能。フェアネス確保のため、<strong>ブロックから開始し2回の被弾</strong>で成立する設計にし、オーバーコミットへの対策と回復・位置取り・射撃のチャンスを両立。</li>
            </ul>
        </div>
        <div class="video">
            <iframe class="youtube" src="https://www.youtube.com/embed/iZpX5J6r-vo" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>

        <h2>エンカウントデザイン</h2>

        <div class="two-col">
        <div class="text">
            <h3>Hamlet Liberation — 最初のアンカー</h3>
            <ul>
            <li>ボスへ至る複数ルートを備えた非線形エリア。</li>
            <li>Act2最初のエリアとして新しい雑魚敵とミニボスを導入し、意図的に難度を上げている。</li>
            <li>正面突破はリスク大：屋根の狙撃兵と伏兵（アンデッドの死んだふり）。</li>
            <li>敵配置・待ち伏せ・巡回を設計し、AIとモーションを調整。</li>
            <li>クラフト素材やReputation入手アイテムなどの報酬を配置。</li>
            </ul>
        </div>
        <div class="video">
            <iframe class="youtube" src="https://www.youtube.com/embed/wAJ0A7wfAPE" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>

        <div class="two-col">
        <div class="text">
            <h3>Optional Area — Sibyl's Teeth</h3>
            <ul>
            <li>取り逃がし可能な、縦に広く非線形なエリア。アクロバティックな移動を促す設計。</li>
            <li>敵配置・待ち伏せ・巡回を担当し、AIと遭遇テンポを調整。</li>
            <li>この時点でプレイヤーは強力な手段（爆弾・銃）を所持。多様な敵組み合わせと高低差を活用し、挑戦的でありつつ不公平感のない戦闘を用意。</li>
            </ul>
        </div>
        <div class="video">
            <iframe class="youtube" src="https://www.youtube.com/embed/175oGxOZtdA" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>
    `
  }
);

// --- Rocksmith+ ---
const rocksmith: LocalizedProject = Object.assign(
  new ProjectData(
    "project-rocksmithplus",
    "Rocksmith+",
    "img/projects/project-rocksmith-icon.jpg",
    "",
    "#f59e0b",
    true
  ),
  {
    nameEn: "Rocksmith+",
    nameJa: "ロックスミス＋",
    htmlEn: `
      <div class="paragraph notice">
        <strong>Developer:</strong> Ubisoft Osaka & Ubisoft San Francisco<br>
        <strong>Role:</strong> Technical Game Designer<br>
        <strong>Platforms:</strong> PlayStation 4/5, iOS, Android, PC
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/z4GYGwWMUd4" frameborder="0" allowfullscreen></iframe>
        <p><em>Official Launch Trailer</em></p>
      </div>

      <div class="paragraph">
        <strong>Rocksmith+</strong> is Ubisoft’s interactive music-learning service for guitar and bass, featuring a large and growing song library, real-time feedback, practice tools, and guided lessons. Players can learn at their own pace with customizable difficulty, technique videos, and arrangement options tuned for different skill levels.
      </div>

      <div class="paragraph">
        <strong>My contributions</strong>
        <ul>
          <li>Implemented in the Snowdrop engine and iterated on game UIs such as Song Results and Pause Screen in close collaboration with UI designers.</li>
          <li>Implemented the first prototype of Tab view, then collaborated cross-discipline to take it to release (see video below).</li>
          <li>Worked with the feature owner to take chord panes and bass chord charts to a release-ready state — article:
            <a target="_blank" href="https://www.ubisoft.com/en-ca/game/rocksmith/plus/news-updates/37P255QRlxXvNJN09l2asc/bass-chord-charts-how-to-play-bass-chords">Bass Chord Charts (EN)</a>.
          </li>
        </ul>
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/3Kc8Xy4adY0?start=25" frameborder="0" allowfullscreen></iframe>
        <p><em>Tab view mode — first look (timestamped)</em></p>
      </div>
    `,
    htmlJa: `
      <div class="paragraph notice">
        <strong>開発：</strong> Ubisoft Osaka & Ubisoft San Francisco<br>
        <strong>役割：</strong> テクニカルゲームデザイナー<br>
        <strong>対応プラットフォーム：</strong> PlayStation 4/5、iOS、Android、PC
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/z4GYGwWMUd4" frameborder="0" allowfullscreen></iframe>
        <p><em>ローンチトレーラー</em></p>
      </div>

      <div class="paragraph">
        『ロックスミス＋』は、ギター／ベース学習のためのインタラクティブなサービスです。拡張し続ける楽曲ライブラリ、リアルタイムのフィードバック、練習ツール、レッスンを備え、難易度やアレンジを調整しながらスキルに応じて自分のペースで学べます。
      </div>

      <div class="paragraph">
        <strong>担当内容</strong>
        <ul>
          <li>Snowdropエンジン上で「楽曲結果」や「一時停止」などのUIを、UIデザイナーと協力しながらブラッシュアップ。</li>
          <li>Tabビューの初期プロトタイプを実装し、クロスファンクショナルに連携して製品版まで推進（下記動画）。</li>
          <li>機能オーナーと協業し、コード表示ペインとベースのコード・チャートを出荷水準まで仕上げ — 解説記事：
            <a target="_blank" href="https://www.ubisoft.com/ja-jp/game/rocksmith/plus/news-updates/37P255QRlxXvNJN09l2asc/rocksmith-20225">日本語記事</a>。
          </li>
        </ul>
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/3Kc8Xy4adY0?start=25" frameborder="0" allowfullscreen></iframe>
        <p><em>Tab view mode — first look（タイムスタンプ）</em></p>
      </div>
    `
  }
);

// --- Other Projects ---
const other: LocalizedProject = Object.assign(
  new ProjectData(
    "project-other",
    "Other Projects",
    "img/projects/project-other-icon.jpg",
    "",
    "#64748b",
    true
  ),
  {
    nameEn: "Other Projects",
    nameJa: "その他のプロジェクト",
    htmlEn: `
    <h2>Throne Rush</h2>
    <div class="paragraph notice">
      <strong>Developer:</strong> Nexters<br>
      <strong>Role:</strong> Game Designer<br>
      <strong>Platforms:</strong> iOS / Android, Browsers
    </div>
    <p class="caption" style="margin: -6px 0 10px; opacity: .8;">Facebook’s “Game of the Year” (2014), 76M+ installs worldwide</p>
    <div class="paragraph">
      <a target="_blank" href="https://www.nexters.com/en/throne-rush/"><strong>Official site</strong></a>
    </div>
    <div class="paragraph">
      An epic online strategy / town builder where you grow a kingdom and expand to claim the Throne.
    </div>
    <div class="paragraph">
      <ul>
        <li>Command and upgrade huge armies featuring LotR-inspired units, from knights and goblins to dragons and ents</li>
        <li>Fortify your base with towers and walls</li>
        <li>Hire and raise mighty heroes with unique abilities</li>
        <li>Focus on social play: clans, clan wars, guild events and more</li>
      </ul>
    </div>
    <div class="paragraph center">
      <img src="/img/projects/project-thronerush-1.png" alt="Throne Rush screenshot" style="max-width:100%; height:auto; display:block; margin:0 auto;" />
    </div>
    <div class="paragraph">
      One of Nexters’ early success stories, Throne Rush stayed in operation with regular updates for 10+ years,
      was <strong>Facebook’s “Game of the Year” (2014)</strong>, and has accumulated <strong>76M+ installs worldwide</strong> over its lifetime.
    </div>
    <div class="paragraph">
      <strong>My contributions</strong>
      <ul>
        <li>First playable prototype implemented in Warcraft 3 Map Editor</li>
        <li>Unit and building design and balance</li>
        <li>Pitched and designed new live ops features</li>
        <li>Single-player campaign level/puzzle design</li>
      </ul>
    </div>

    <h2>James Bond: World of Espionage</h2>
    <div class="paragraph notice">
      <strong>Developer:</strong> Glu Mobile<br>
      <strong>Role:</strong> Game Designer<br>
      <strong>Platforms:</strong> iOS / Android
    </div>
    <div class="paragraph center">
      <iframe class="youtube" src="https://www.youtube.com/embed/zd0054I6zos" frameborder="0" allowfullscreen></iframe>
      <p><em>Announcement Trailer</em></p>
    </div>
    <div class="paragraph">
      A mobile strategy title where players deploy Bond and other MI6 agents across the globe, grow their agency,
      and vie for the role of M while thwarting world-threatening plots.
    </div>
    <div class="paragraph">
      <strong>My contributions</strong>
      <ul>
        <li>Designed multiple features including PvP, crafting, and character abilities, ensuring licensor approvals</li>
        <li>Balance tuning for the game economy during beta and live ops</li>
        <li>Designed and tuned in-game events</li>
      </ul>
    </div>
    `,
    htmlJa: `
    <h2>Throne Rush</h2>
    <div class="paragraph notice">
      <strong>開発：</strong> Nexters<br>
      <strong>役割：</strong> ゲームデザイナー<br>
      <strong>対応プラットフォーム：</strong> iOS / Android、ブラウザ
    </div>
    <p class="caption" style="margin: -6px 0 10px; opacity: .8;">Facebook「Game of the Year」(2014)、累計7,600万超のインストール</p>
    <div class="paragraph">
      <a target="_blank" href="https://www.nexters.com/en/throne-rush/"><strong>公式サイト</strong></a>
    </div>
    <div class="paragraph">
      王国を育て、拡大し、王座を目指すエピックなオンライン・ストラテジー／タウンビルダー。
    </div>
    <div class="paragraph">
      <ul>
        <li>騎士やゴブリンからドラゴン、エントまで、LotR風のユニットで構成された大軍勢を指揮・強化</li>
        <li>タワーや城壁で拠点を要塞化</li>
        <li>固有アビリティを持つ英雄の雇用・育成</li>
        <li>クラン、クラン戦、ギルドイベントなどソーシャル要素に注力</li>
      </ul>
    </div>
    <div class="paragraph center">
      <img src="/img/projects/project-thronerush-1.png" alt="Throne Rush スクリーンショット" style="max-width:100%; height:auto; display:block; margin:0 auto;" />
    </div>
    <div class="paragraph">
      Nexters初期の成功作のひとつであり、10年以上にわたり運用と定期アップデートが続きました。2014年には<strong>Facebook「Game of the Year」</strong>を受賞し、累計<strong>7,600万超のインストール</strong>を記録しています。
    </div>
    <div class="paragraph">
      <strong>担当内容</strong>
      <ul>
        <li>Warcraft 3 マップエディタでの初期プレイアブル・プロトタイプ実装</li>
        <li>ユニット／建物の設計とバランス調整</li>
        <li>ライブオプス向け新機能の提案・設計</li>
        <li>シングルプレイヤー・キャンペーンのレベル／パズル設計</li>
      </ul>
    </div>

    <h2>James Bond: World of Espionage</h2>
    <div class="paragraph notice">
      <strong>開発：</strong> Glu Mobile<br>
      <strong>役割：</strong> ゲームデザイナー<br>
      <strong>対応プラットフォーム：</strong> iOS / Android
    </div>
    <div class="paragraph center">
      <iframe class="youtube" src="https://www.youtube.com/embed/zd0054I6zos" frameborder="0" allowfullscreen></iframe>
      <p><em>アナウンストレーラー</em></p>
    </div>
    <div class="paragraph">
      ボンドやMI6エージェントを世界各地に派遣してエージェンシーを拡大し、Mの座を目指しながら世界規模の脅威に立ち向かうモバイル向けストラテジー。
    </div>
    <div class="paragraph">
      <strong>担当内容</strong>
      <ul>
        <li>PvP／クラフト／キャラクターアビリティなど複数の機能を設計し、ライセンサー承認まで対応</li>
        <li>ベータ／ライブオプス段階でのゲーム経済のバランス調整</li>
        <li>ゲーム内イベントの設計・チューニング</li>
      </ul>
    </div>
    `
  }
);

export default [shores, flint, rocksmith, other];

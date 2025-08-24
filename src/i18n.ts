import Vue from 'vue';

export type Lang = 'en' | 'ja';

export const i18n = Vue.observable({
  lang: (localStorage.getItem('lang') as Lang) || 'en',
  setLang(l: Lang) {
    this.lang = l;
    localStorage.setItem('lang', l);
  }
});

// Centralized strings. Add more keys as you go.
export const messages = {
  en: {
    nav: { about: 'About me', games: 'Games', contact: 'Contact' },
    about: {
      title: 'Nice to meet you!',
      p1: `I’m Ilya Rudnev, a game designer and developer with over a decade of industry experience, currently based in Sapporo, Japan.`,
      p2: `I created and shipped <a href="/game-projects#project-shores">Shores Unknown</a>, an Unreal-powered tactical RPG built with a small distributed team, and contributed to several other titles including <a href="/game-projects#project-flintlock">Flintlock: The Siege of Dawn</a> and <a href="/game-projects#project-rocksmith">Rocksmith+</a>.`,
      p3: `With 7+ years of specializing in technical game design (mainly in Unreal Engine), I bring both creative and technical expertise to help teams realize their vision from early concept through to release, with a focus on RPG and action RPG gameplay and combat encounter design.`
    },
    contact: {
        title: 'Get in touch!',
        blurb:
          "Feel free to reach out if you’d like to talk about opportunities, or just to chat about games and game development.",
        email: 'Email',
        linkedin: 'LinkedIn'
      },
      projects: {
        title: 'Project Showcase',
        blurb: 'A hand-picked selection of games I’ve worked on.',
        morePrefix: 'More info on my other work on my',
        moreLinkText: 'LinkedIn'
      },
  },
  ja: {
    nav: { about: '自己紹介', games: '作品', contact: '連絡先' },
    about: {
      title: 'はじめまして！',
      p1: `私はゲームデザイナー／デベロッパーのラドニフ・イリヤです。業界経験は10年以上にわたり、現在は札幌を拠点に活動しています。`,
      p2: `小規模チームでタクティカルRPG『<a href="/game-projects#project-shores">Shores Unknown</a>』を開発・リリースし、その後『<a href="/game-projects#project-flintlock">Flintlock: The Siege of Dawn</a>』や『<a href="/game-projects#project-rocksmith">Rocksmith+</a>』など複数のタイトルに携わりました。`,
      p3: `Unreal Engineを使ったテクニカルデザインに7年以上の経験があり、企画の初期段階からリリースまで、RPG／アクションRPGのゲームプレイや敵との戦闘設計を中心に、デザインと実装の両面からチームのビジョンを形にしています。`    
    },
    contact: {
        title: '連絡先',
        blurb:
          '採用やプロジェクトのご相談はもちろん、ゲームや開発の雑談でもお気軽にご連絡ください。',
        email: 'メール',
        linkedin: 'LinkedIn'
      },
      projects: {
        title: '制作実績',
        blurb: '携わったタイトルの一部を紹介します。',
        morePrefix: 'その他の実績については',
        moreLinkText: 'LinkedInをご覧ください'
      }
  }
};

// Simple getter: t('about.title'), t('nav.about'), etc.
export function t(path: string): string {
    const parts = path.split('.');
    // dynamic access = unknown to TS, so treat as any while walking
    let node: any = (messages as any)[i18n.lang];
  
    for (const p of parts) {
      node = node?.[p];
      if (node == null) return path; // fallback to key on missing path
    }
  
    // only return if it's actually a string
    return typeof node === 'string' ? node : path;
  }

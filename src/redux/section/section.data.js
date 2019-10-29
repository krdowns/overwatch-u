const SECTION_DATA = {
  heroes: {
    id: 1,
    title: "Heroes",
    routeName: "heroes",
    hero: [
      {
        id: 1,
        name: "Ana",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/ana/full-portrait.png",
        role: "Support",
        difficulty: 3,
        counters: [
          "Baptiste",
          "Bastion",
          "Lucio",
          "Moira",
          "Pharah",
          "Roadhog",
          "Torbjorn",
          "Wrecking Ball",
          "Zenyatta"
        ],
        counteredBy: [
          "Doomfist",
          "D.Va",
          "Genji",
          "Tracer",
          "Winston",
          "Widowmaker"
        ],
        abilities: [
          {
            id: 1,
            ability: "Biotic Rifle",
            type: "Active",
            description: `Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/fc/Ability-ana1.png/200px-Ability-ana1.png?version=1101920478ed5840a6a4d4698ee87951",
            videoUrl: ""
          },
          {
            id: 2,
            ability: "Sleep Dart",
            type: "Active",
            description: `Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/58/Ability-ana2.png?version=16d255d03319dd3c807fb40cd8ccdd4d",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Biotic Grenade",
            type: "Active",
            description: `Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0c/Ability-ana3.png?version=9a0fccef6abb2a7fc868ce423c005463",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "Nano Boost",
            type: "Ultimate",
            description: `After Ana hits one of her allies with a combat boost, they deal more damage, and take less damage from enemies’ attacks.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/97/Ability-ana4.png?version=4863fe518c6f7590d631ab168dde613f",
            videoUrl: ""
          }
        ],
        backStory: `One of the founding members of Overwatch, Ana uses her skills and expertise to defend her home and the people she cares for. As the Omnic Crisis inflicted a heavy toll on Egypt, the country's depleted and undermanned security forces relied on elite snipers for support. Among them was Ana Amari, who was widely considered to be the world's best. Her superior marksmanship, decision-making, and instincts made her a natural selection to join the Overwatch strike team that would end the war. Following the success of Overwatch's original mission, Ana served for many years as Strike Commander Morrison's second-in-command. Despite her responsibilities in leading the organization, Ana refused to step away from combat operations. She remained on active duty well into her fifties, until she was believed to have been killed during a hostage rescue mission by the Talon operative known as Widowmaker. In truth, Ana survived that encounter, despite being gravely wounded and losing her right eye. During her recovery, she wrestled with the weight of a life spent in combat, and she chose to stay out of the world's growing conflicts. However, as time passed, she realized she could not sit on the sidelines while people threatened her city and the innocents around her. Now, Ana has rejoined the fight to protect her country from the forces that would destabilize it, and most importantly, to keep her family and her closest allies safe.`
      },
      {
        id: 2,
        name: "Ashe",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/full-portrait.png",
        role: "Damage",
        difficulty: 2,
        counters: [
          "Baptiste",
          "Bastion",
          "Mercy",
          "Pharah",
          "Reaper",
          "Torbjorn"
        ],
        counteredBy: [
          "Doomfist",
          "D.Va",
          "Genji",
          "Hanzo",
          "Reinhardt",
          "Widowmaker",
          "Wrecking Ball"
        ],
        abilities: [
          {
            id: 1,
            ability: "The Viper",
            type: "Active",
            description: `Ashe's semi-automatic rifle fires quick shots, or she can use her aim-down sights for a more damaging, precise shot.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/4e/Ability-ashe1.png/200px-Ability-ashe1.png?version=4baf97e1420004f46bb5aef028491998",
            videoUrl: ""
          },
          {
            id: 2,
            ability: "Dynamite",
            type: "Active",
            description: `Ashe throws an explosive that detonates after a short delay or immediately when shot. The explosion from Dynamite also lights enemies on fire, dealing damage over time.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/da/Ability-ashe2.png?version=109c3fd36bae2d802049ed1d38812d78",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Coach Gun",
            type: "Active",
            description: `Ashe blasts enemies in front of her, knocking them away and propelling herself backward for added mobility.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/85/Ability-ashe3.png?version=c4fef058f32a7b8b78d4ec96f1036df4",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "B.O.B.",
            type: "Ultimate",
            description: `Ashe summons her trusted omnic sidekick, Bob, who charges forward and knocks enemies into the air, then lays down suppressing fire with his arm cannons.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/7a/Ability-ashe4.png?version=6856551928f816755e50ba6393d0be4d",
            videoUrl: ""
          }
        ],
        story: `Ashe is the ambitious and calculating leader of the Deadlock Gang and a respected figure in the criminal underworld. Born into a wealthy family, Ashe grew up surrounded by privilege. Her parents were highly sought-after business consultants and coaches for powerful CEOs around the world. Though her parents paid little attention to her (mostly leaving her in the care of the family’s omnic butler, Bob), they ensured that Ashe had every opportunity to succeed. But a chance meeting with a local ruffian, named Jesse McCree, and an impromptu string of crimes committed together opened her eyes to her true calling. The satisfaction of outwitting her targets and the thrill of getting away with it set her on the outlaw path. Along with the other three founders of the Deadlock Gang, Ashe started to make a name for herself with bigger and more extravagant heists. The Deadlock Gang’s rapid rise to prominence put them at odds with the other criminal organizations in the American Southwest; the encounters often became violent. After years of skirmishes and bloodshed, Ashe called the heads of the major groups together. Ashe saw the potential to grow the influence of all. She used what she’d learned from her parents’ business to bring order to these groups. Her proposal was that the gangs could work together (or at least, not work against each other). Her principles: keep your word, don’t work with the law, respect each other’s territory, and always punish betrayal. No longer having to focus her energies on squabbles with the other gangs, Ashe is now writing her name across the American Southwest with a string of audacious heists and operations that has put her at top of the authorities’ most-wanted lists and cemented her legacy as an outlaw legend.`
      },
      {
        id: 3,
        name: "Baptiste",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/baptiste/full-portrait.png",
        role: "Support",
        difficulty: 3,
        counters: ["D.Va", "Junkrat", "Moira", "Zarya"],
        counteredBy: [
          "Ana",
          "Ashe",
          "Bastion",
          "Doomfist",
          "Hanzo",
          "Mei",
          "Orisa",
          "Roadhog",
          "Soldier: 76",
          "Sombra",
          "Widowmaker",
          "Winston",
          "Wrecking Ball"
        ],
        abilities: [
          {
            id: 1,
            ability: "Biotic Launcher",
            type: "Active",
            description: `Baptiste’s three-round-burst Biotic Launcher rewards accuracy and recoil control with significant damage output. It also doubles as a healing device, lobbing projectiles that heal allies near the point of impact.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/26/Baptiste-ability1.png/200px-Baptiste-ability1.png?version=57cd947f03260a7ee371a4fc8b5b298a",
            imageUrl2:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/69/Baptiste-alt-fire.png?version=7aea03fcc33e492ef0cbc230f172761e",
            videoUrl: ""
          },
          {
            id: 2,
            ability: "Regenerative Burst",
            type: "Active",
            description: `Baptiste activates an intense regenerative burst that heals himself and nearby allies over time.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/b3/Baptiste-ability2.png/200px-Baptiste-ability2.png?version=413bc917adff5393854c732a60a63840",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Immortality Field",
            type: "Active",
            description: `Baptiste uses a device to create a field that prevents allies from dying. The generator can be destroyed.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/8/8d/Baptiste-ability3.png/200px-Baptiste-ability3.png?version=6e310f8340ff972018b5e4093a825c91",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "Amplification Matrix",
            type: "Ultimate",
            description: `Baptiste creates a matrix that doubles the damage and healing effects of friendly projectiles that pass through it.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/2d/Baptiste-ability4.png/200px-Baptiste-ability4.png?version=5b6255a4054889d93697494730e40aa5",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Exo Boots",
            type: "Passive",
            description: `By first crouching, Baptiste can jump higher.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/e/e5/Baptiste-ability5.png/154px-Baptiste-ability5.png?version=6d96a78260cc22680e72c65e5e193adc",
            videoUrl: ""
          }
        ],
        story: `An elite combat medic and ex-Talon operative, Baptiste now uses his skills to help those whose lives have been impacted by war. Jean-Baptiste Augustin was one of the 30 million children orphaned by the Omnic Crisis. With limited opportunities and resources, he enlisted in the military. The Caribbean Coalition, a pan-island force formed in response to the Crisis, became his new home. Guided by his innate desire to help people, Baptiste chose the path of a combat medic and served in an elite branch of the Caribbean Coalition’s special ops. After his service was complete, Baptiste struggled to find a demand for his unique skills. He turned to one of the few opportunities open to him: joining the Talon mercenary group, one of the many organizations that were poised to profit off the chaos in the war's aftermath. For the first time ever, Baptiste had a taste of the good life. Talon's missions were easy and paid well, and he put aside some of his earnings to set up a clinic in his hometown. But slowly, his unit's orders escalated in brutality, expanding into assassinations and operations with civilian casualties. Confronted by his team's actions, Baptiste realized he was perpetuating a cycle of violence like the one that had destroyed his own community. He abandoned Talon, disgusted with what he had done and determined to forge a new path for himself. But Talon would not let him go. Baptiste knew too much, and they sent operatives after him to silence him. Agent after agent came for him, including Baptiste's former comrades. To stay under the radar, Baptiste drifted from place to place, aiding in humanitarian efforts around the globe. The few Talon members who managed to track him down were never seen again. Now, Baptiste works toward a better world, healing where he can and fighting when he must. He knows that he cannot undo his past—but that making a difference now is what matters.`
      },
      {
        id: 4,
        name: "Bastion",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/full-portrait.png",
        role: "Damage",
        difficulty: 1,
        counters: [
          "Baptiste",
          "Reinhardt",
          "Winston",
          "Wrecking Ball",
          "Zarya"
        ],
        counteredBy: [
          "Ana",
          "Ashe",
          "D.Va",
          "Genji",
          "Hanzo",
          "Junkrat",
          "Pharah",
          "Roadhog",
          "Soldier: 76",
          "Tracer",
          "Widowmaker",
          "Zenyatta"
        ],
        abilities: [
          {
            id: 1,
            ability: "Configuration: Recon",
            type: "Active",
            description: `In Recon mode, Bastion is fully mobile, outfitted with a submachine gun that fires steady bursts of bullets at medium range.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/9/9a/Ability-bastion1.png/200px-Ability-bastion1.png?version=852ffc4cdad65f826a9a056d9ae43d6a",
            videoUrl: "https://youtu.be/FvKaYo9rQp8"
          },
          {
            id: 2,
            ability: "Configuratin: Sentry",
            type: "Active",
            description: `In Sentry mode, Bastion is a stationary powerhouse equipped with a gatling gun capable of unleashing a hail of bullets. The gun's aim can be "walked" across multiple targets, dealing devastating damage at short to medium range.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/fc/Ability-bastion2.png/200px-Ability-bastion2.png?version=16aaea61a6b226f3ec003c99c14345e2",
            videoUrl: "https://www.youtube.com/watch?v=BQdEXOvBTBY"
          },
          {
            id: 3,
            ability: "Reconfigure",
            type: "Active",
            description: `Bastion transforms between its two primary combat modes to adapt to battlefield conditions.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2e/Ability-bastion3.png?version=c23c759ddca138860e409351927bd86f",
            videoUrl: "https://youtu.be/QgnbznPSVHU"
          },
          {
            id: 4,
            ability: "Self-Repair",
            type: "Active",
            description: `Bastion restores its health; it cannot fire weapons while the repair process is in effect.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/24/Ability-bastion4.png?version=3edbc65185e7b181e42f87d201c58f2f",
            videoUrl: "https://youtu.be/SNz5kwetELo"
          },
          {
            id: 5,
            ability: "Configuration: Tank",
            type: "Ultimate",
            description: `In Tank mode, Bastion extends wheeled treads and a powerful long-range cannon. The cannon’s explosive shells demolish targets in a wide blast radius, but Bastion can only remain in this mode for a limited time.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/2e/Achievement_Charge%21.png/200px-Achievement_Charge%21.png?version=5c165d749eb2397e98f0b1f9847d5445",
            videoUrl: "https://www.youtube.com/watch?v=2A__l88rUqg"
          },
          {
            id: 6,
            ability: "Ironclad",
            type: "Passive",
            description: `Reduces damage taken while transformed.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0f/Icon-ability.0f6m2.png?version=6378b0fcc7896481410ac57e599cae6c",
            videoUrl: ""
          }
        ],
        story: `Once a frontline combatant in the devastating Omnic Crisis, this curious Bastion unit now explores the world, fascinated by nature but wary of a fearful humanity. Originally created for peacekeeping purposes, Bastion robot units possessed the unique ability to rapidly reconfigure themselves into an assault-cannon mode. But during the Omnic Crisis, they were turned against their human makers, forming the bulk of the omnics' rebel army. Following the resolution of the crisis, nearly all of them were destroyed or disassembled. To this day, Bastion units still symbolize the horrors of the conflict. One unique Bastion unit, severely damaged in the final battles of the war, was left forgotten for over a decade. It lay dormant, exposed to the elements and rusting while nature slowly reclaimed it. Overgrown with vines and roots and nested upon by small animals, the robot sat inert, seemingly unaware of the passing of time. That was until one fateful day, when it unexpectedly reactivated. With its combat programming all but lost, it instead displayed an intense curiosity about the natural world and its inhabitants. This inquisitive Bastion unit set out to explore its surroundings and discover its purpose on a war-ravaged planet. Though "Bastion" appears to be gentle—even harmless, at times—its core combat programming takes over when the unit senses danger, utilizing its entire arsenal to eliminate anything it perceives as a threat. This has led to instances of conflict with the few humans it has encountered, and has driven it to avoid populated areas in favor of the wild, uncharted regions of the world.`
      },
      {
        id: 5,
        name: "Brigitte",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/brigitte/full-portrait.png",
        role: "Support",
        difficulty: 1,
        counters: ["D.Va", "Genji", "Tracer", "Wrecking Ball"],
        counteredBy: [
          "Junkrat",
          "Pharah",
          "Reaper",
          "Sombra",
          "Torbjorn",
          "Widowmaker"
        ],
        abilities: [
          {
            id: 1,
            ability: "Rocket Flail",
            type: "Active",
            description: `Brigitte's melee weapon has an extended range, enabling her to strike multiple enemies with a single swing.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/21/Rocket_Flail.png/200px-Rocket_Flail.png?version=fba956a94337375d94de28af5263ccb1",
            videoUrl: ""
          },
          {
            id: 2,
            ability: "Repair Pack",
            type: "Active",
            description: `Brigitte throws a Repair Pack that can heal an ally. Any healing over that ally’s maximum health provides them with armor instead. This armor does get removed after some time if not destroyed.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/05/Repair_Pack.png?version=b1a535529185d965da9fa1047386ac4c",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Whip Shot",
            type: "Active",
            description: `Brigitte throws her flail a long distance, dealing damage and knocking an enemy away from her.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/69/Whip_Shot.png?version=bd31d5f59f3238b549c5059afa798b15",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "Barrier Shield",
            type: "Active",
            description: `Brigitte deploys a frontal energy barrier to absorb a limited amount of damage.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/55/Barrier_Shield.png?version=c12d573f9296cd4d64534b3a21a59782",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Shield Bash",
            type: "Active",
            description: `Once her Barrier Shield is deployed, Brigitte can dash forward to stun an enemy.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/86/Shield_Bash.png?version=592879ded2cb3b0f73e97e92ab50cd7d",
            videoUrl: ""
          },
          {
            id: 6,
            ability: "Rally",
            type: "Ultimate",
            description: `Brigitte moves faster and provides all nearby allies with armor that lasts until it’s removed by damage.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/07/Rally.png?version=5a079103264052a4d3963a2ece4af9bc",
            videoUrl: ""
          },
          {
            id: 7,
            ability: "Inspire",
            type: "Passive",
            description: `When Brigitte strikes an enemy with her flail, all allies within range are healed over time.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/66/Inspire_PNG.png?version=01c1dffdb28c5c82b68662b6043e5c89",
            videoUrl: ""
          }
        ],
        story: `No longer sitting on the sidelines, Brigitte Lindholm has taken up arms to defend those in need of protection. The youngest daughter of weapons designer, Torbjörn Lindholm, Brigitte was the first of his children to show an interest in mechanical engineering. Brigitte spent much of her spare time in her father's workshop, learning the trade and honing her skills. Her aptitude for engineering mirrored that of her father's, but Brigitte's primary interest was in armor fabrication and defensive systems, unlike Torbjörn, who was world renowned (and perhaps infamous) for the weapons he created. Everyone expected that Brigitte would continue her apprenticeship and follow in her father's footsteps. But her plans changed due to influence of another prominent figure in her life, her father's close friend and fellow Overwatch agent, Reinhardt Wilhelm. A close friend of the family and Brigitte's godfather, Reinhardt told Brigitte tales of heroes and chivalry as she grew up. After his retirement and Overwatch's fall, Reinhardt declared that he would become a knight-errant on a quest to bring justice. Before he left on his adventures, Brigitte surprised him by asking to join him as his squire. Reinhardt accepted. As a squire, Brigitte had many responsibilities, the most important of which was the upkeep of Reinhardt's Crusader armor (a design she was familiar with as the current version was designed by her father). But more and more, she found her main job was taking care of Reinhardt himself, trying to protect him from his overenthusiasm even as his body was breaking down from years of combat. Eventually, she realized that serving only as a mechanic wasn't enough, and that the best way she could aid Reinhardt was to become a warrior in her own right. While Reinhardt trained her in combat, Brigitte began to build her own suit of armor in secret. Now Brigitte fights at Reinhardt's side to protect him, and any others in need as knight and squire journey to make the world a better place, one battle at a time.`
      },
      {
        id: 6,
        name: "D.Va",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/dva/full-portrait.png",
        role: "Tank",
        difficulty: 2,
        counters: [
          "Ana",
          "Ashe",
          "Bastion",
          "Hanzo",
          "McCree",
          "Mercy",
          "Moira",
          "Pharah",
          "Sigma",
          "Torbjorn",
          "Widowmaker",
          "Winston"
        ],
        counteredBy: [
          "Baptiste",
          "Brigitte",
          "Doomfist",
          "Junkrat",
          "Mei",
          "Reaper",
          "Roadhog",
          "Sombra",
          "Zarya",
          "Zenyatta"
        ],
        abilities: [
          {
            id: 1,
            ability: "Fusion Cannons",
            type: "Active",
            description: `D.Va's mech is equipped with twin short-range rotating cannons. They lay down continuous, high-damage fire without needing to reload, but slow D.Va’s movement while they’re active.`,
            imageUrl:
              "hhttps://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/b9/Ability-dva1.png/200px-Ability-dva1.png?version=ac54689044c1ec52b2afcedb2de20e71",
            videoUrl: "https://youtu.be/jF4HHqnNgAY"
          },
          {
            id: 2,
            ability: "Light Gun",
            type: "Active",
            description: `While outside of her mech, D.Va can continue the fight with a mid-range automatic blaster.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/0/09/Ability-dva5.png/200px-Ability-dva5.png?version=06807cd007cfa76dde727bb0e5cf05b6",
            videoUrl: "https://youtu.be/4pAUI5g_W08"
          },
          {
            id: 3,
            ability: "Defense Matrix",
            type: "Active",
            description: `D.Va can activate this forward-facing targeting array to shoot incoming projectiles out of the air.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/3a/Ability-dva3.png?version=d6a6ffcd9b2322a1e2cac505e212718a",
            videoUrl: "https://youtu.be/ZRBKIsTlTJw"
          },
          {
            id: 4,
            ability: "Micro Missiles",
            type: "Active",
            description: `D.Va launches a volley of explosive rockets.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/17/Ability-dva7.png?version=ca7cdb9eee992aebdea5e9dd4d559dce",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Self Destruct",
            type: "Ultimate",
            description: `D.Va ejects from her mech and sets its reactor to explode, dealing massive damage to nearby opponents.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/44/Ability-dva4.png?version=cccd452147ad7aa5ddd8b5339021f72b",
            videoUrl: "https://youtu.be/lkeeAn7uitE"
          },
          {
            id: 6,
            ability: "Call Mech",
            type: "Ultimate",
            description: `If her armored battle suit is destroyed, D.Va can call down a fresh mech and return to the fray.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f0/Ability-dva6.png?version=a7c42787f80d251dc2256e0e7a9a8a09",
            videoUrl: "https://youtu.be/ADjl9-8uCoQ"
          },
          {
            id: 7,
            ability: "Eject",
            type: "Passive",
            description: `Eject out of your mech when it's destroyed.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/75/Passive-D.Va.png?version=24c182ac372e6865dc6d99e00e6659d9",
            videoUrl: ""
          }
        ],
        story: `D.Va is a former professional gamer who now uses her skills to pilot a state-of-the-art mech in defense of her homeland. Twenty years ago, South Korea was attacked by a colossal omnic monstrosity that rose from the depths of the East China Sea. The massive, lumbering construct caused catastrophic damage to coastal cities before it was driven back beneath the waves. In response, the South Korean government developed a mechanized armored drone unit, called MEKA, to protect urban environments in future engagements with the omnic threat. The government's fears proved to be well founded, as a disturbing pattern of attacks emerged. Every few years, the monstrosity would rise from the sea to assault South Korea and its neighbors. The omnic learned from these encounters, often reconfiguring itself in a different form and appearing with new weapons and capabilities. Each incident ended in a stalemate, with the monstrosity defeated but not destroyed. As the omnic continued to adapt, it eventually disrupted MEKA's drone-control networks, forcing the military to place pilots in the mechs. Scrambling to find suitable candidates, the government turned to the country's professional gamers, who possessed the necessary reflexes and instincts to operate the mechs' advanced weapons systems. Top stars were drafted, including reigning world champion Hana Song, also known as "D.Va." Famous for her elite skills, D.Va was a fierce competitor who played to win at all costs, and she had a well-earned reputation for showing no mercy to her opponents. Seeing her new mission as a game, D.Va fearlessly charges into battle alongside the rest of her MEKA unit, ready to spring to her nation's defense at a moment's notice. Recently, she has begun to stream combat operations to her adoring fans, and her growing following has turned her into a global icon.`
      },
      {
        id: 7,
        name: "Doomfist",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/doomfist/full-portrait.png",
        role: "Damage",
        difficulty: 3,
        counters: [
          "Ana",
          "Ashe",
          "Baptiste",
          "D.Va",
          "Genji",
          "Reinhardt",
          "Sigma",
          "Zenyatta"
        ],
        counteredBy: ["McCree", "Orisa", "Pharah", "Reaper", "Sombra"],
        abilities: [
          {
            id: 1,
            ability: "Hand Cannon",
            type: "Active",
            description: `Doomfist fires a short-range burst from the knuckles of his fist. Its ammunition is automatically regenerated over a short time.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/bb/Hand_cannon.png/200px-Hand_cannon.png?version=6bc1f25a5cf4773afab98a8df00d162b",
            videoUrl: ""
          },
          {
            id: 2,
            ability: "Seismic Slam",
            type: "Active",
            description: `Doomfist leaps forward and smashes into the ground, knocking nearby enemies toward him.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/eb/Ability_Doomfist_Seismic_Slam.png?version=20febd2b8e4a648cdb958b418acee236",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Rising Uppercut",
            type: "Active",
            description: `Doomfist uppercuts enemies in front of him into the air.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2c/Rising_uppercut.png?version=252b1ac44072e830756038baa519988e",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "Rocket Punch",
            type: "Active",
            description: `After charging up, Doomfist lunges forward and knocks an enemy back, dealing additional damage if they impact a wall.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ea/Rocket_punch.png?version=48bf7cac7d8144a2daba5cdd2417f6d1",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Meteor Strike",
            type: "Ultimate",
            description: `Doomfist leaps into the sky, then crashes to the ground, dealing significant damage.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e7/Ability_Doomfist_Meteor_Strike.png?version=ffa423d6b815937e12bb1533c410340b",
            videoUrl: ""
          },
          {
            id: 6,
            ability: "The Best Defense...",
            type: "Passive",
            description: `Doomfist generates temporary personal shields when he deals ability damage.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2e/The_best_defense.png?version=127198be08719e9bca66ad2397739001",
            videoUrl: ""
          }
        ],
        story: `Recently freed from imprisonment, Doomfist is determined to plunge the world into a new conflict that he believes will make humanity stronger. Akande Ogundimu was born into a well-regarded Nigerian family, heir to its prosthetic-technology company. A highly intelligent and charismatic figure, Ogundimu helped to expand his family's business and position it for the future while dedicating his free time to his first love: competitive martial arts. He trained in traditional African fighting styles, including Dambe and Gidigbo, as well as in wrestling and other modern combat systems, incorporating the most effective techniques into his repertoire. Ogundimu competed in tournaments all over the continent, utilizing his intuition and ability to read opponents alongside his tremendous speed and strength. But when he lost his right arm in the aftermath of the Omnic Crisis, it seemed his martial arts career was finished before he had reached his prime. His company's cybernetic prosthetics allowed him to recover from his injuries, even making him stronger, but these enhancements rendered him ineligible for competition. He tried to devote himself to his business with the same zeal that he had for fighting, but he found nothing that could fill the void… until he was given a new opportunity by Akinjide Adeyemi, better known to the world as the second Doomfist, the Scourge of Numbani. Adeyemi offered Ogundimu the chance to fight with him as a mercenary. Initially wary, Ogundimu accepted, and discovered that he now had an arena in which he could unleash his enhanced capabilities. Eventually, Adeyemi brought him into the Talon organization. Talon's belief that humanity would be made stronger through conflict resonated with Ogundimu's personal experiences. Moreover, Talon's power struggles presented a new challenge that allowed him to use his talent in the boardroom along with his cunning as a combatant. Adeyemi was a useful asset to Talon, but the organization saw far greater potential in Ogundimu, with his intelligence and his ability to inspire as a commander. While Adeyemi was content to profit from raids on Numbani, Ogundimu had a grander vision. This difference in aspiration would lead Ogundimu to kill his teacher and take on the mantle of Doomfist, along with the eponymous gauntlet. As the new Doomfist, Ogundimu rose high in Talon and helped to orchestrate a conflict that the organization hoped would someday engulf the world. However, before their plan came to fruition, Ogundimu was defeated and captured by an Overwatch strike team that included Tracer, Winston, and Genji. He was imprisoned in a maximum-security facility for years, where he waited patiently for events he had incited to play out. Finally, he sensed that the time had come for him to return. He broke out of his prison and recovered Doomfist's gauntlet in a one-sided battle with Numbani's newly unveiled OR15 defense robots. Now, he has retaken his place in Talon's inner council, ready to spark a war that will consume the world once again.`
      },
      {
        id: 8,
        name: "Genji",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/genji/full-portrait.png",
        role: "Damage",
        difficulty: 3,
        counters: [
          "Ana",
          "Ashe",
          "Bastion",
          "Hanzo",
          "Junkrat",
          "Mercy",
          "Orisa",
          "Torbjorn",
          "Widowmaker",
          "Zenyatta"
        ],
        counteredBy: [
          "Brigitte",
          "Doomfist",
          "Mei",
          "Moira",
          "Pharah",
          "Roadhog",
          "Winston",
          "Zarya"
        ],
        abilities: [
          {
            id: 1,
            ability: "Shuriken",
            type: "Active",
            description: `Genji looses three deadly throwing stars in quick succession.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/28/Ability-genji1.png/200px-Ability-genji1.png?version=f5acae0899d56301b54aee0e502e26bf",
            videoUrl: "https://youtu.be/RVtaERpoRag"
          },
          {
            id: 2,
            ability: "Fan of Blades",
            type: "Active",
            description: `Alternatively, he can throw three shuriken in a wider spread.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/28/Ability-genji1.png/200px-Ability-genji1.png?version=f5acae0899d56301b54aee0e502e26bf",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Swift Strike",
            type: "Active",
            description: `Genji darts forward, slashing with his wakizashi and passing through foes in his path. If Genji eliminates a target, he can instantly use this ability again.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/02/Ability-genji3.png?version=97baa7a886b91f9da9216b3a2d743639",
            videoUrl: "https://youtu.be/ndyaZfj58qA"
          },
          {
            id: 4,
            ability: "Deflect",
            type: "Active",
            description: `With lightning-quick swipes of his wakizashi, Genji reflects an oncoming projectile and sends it rebounding towards his opponent.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/70/Ability-genji2.png?version=573acd7a6892b9814e4cce5705209e15",
            videoUrl: "https://youtu.be/luBg5d0a_BM"
          },
          {
            id: 5,
            ability: "Dragonblade",
            type: "Ultimate",
            description: `Genji brandishes his katana for a brief period of time. Until he sheathes his katana, Genji can deliver killing strikes to any targets within his reach.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/38/Ability-genji4.png?version=a099b61a01e7703188ee547453e84b63",
            videoUrl: "https://youtu.be/ADrxw94XHLg"
          },
          {
            id: 6,
            ability: "Cyber-Agility",
            type: "Passive",
            description: `Climb on walls and double jump.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/53/Ability-genji5.png?version=7da34021f6705810b183888bf43662fa",
            videoUrl: ""
          }
        ],
        story: `The cyborg Genji Shimada has made peace with the augmented body he once rejected, and in doing so, he has discovered a higher humanity. As the youngest son of the master of the Shimada ninja clan, Genji lived a life of luxury and privilege. He had little interest in the family's illegal businesses, and although he excelled at and enjoyed his ninja training, he spent most of his time pursuing a playboy lifestyle. Many within the clan considered the carefree Genji to be a dangerous liability, and they resented his father for coddling and protecting him. Following the clan leader's untimely death, Genji's older brother, Hanzo, demanded that Genji take a more active role in their late father's empire. Genji refused, enraging Hanzo. The tension between the brothers built to a violent confrontation that left Genji on the verge of dying. Hanzo believed that he had killed his brother, but Genji was rescued by Overwatch and the intervention of Dr. Angela Ziegler. The global security force saw Genji as a potential asset in its ongoing operations to combat the Shimada clan. As Genji's injuries left him clinging to life, Overwatch offered to rebuild his body in exchange for his help. He was put through an extensive process of cyberization, which enhanced his natural speed and agility and augmented his superlative ninja skills. Transformed into a living weapon, Genji single-mindedly set about the task of dismantling his family's criminal empire. But as time passed, Genji felt increasingly at war with himself. He was repulsed by the mechanical parts of his body and could not come to grips with what he had become. When his mission was complete, he abandoned Overwatch and wandered the world in search of meaning. He drifted for many years before crossing paths with the omnic monk Zenyatta. Though Genji initially rejected Zenyatta's wisdom, the benevolent omnic would not be deterred. In time, Zenyatta became his mentor, and under the monk's tutelage, Genji reconciled his dual existence as both man and machine. He learned to accept that although he had a cyborg body, his human soul was intact, and he came to see his new form as a gift and a unique strength. Now, for the first time in his life, Genji is free. Even he cannot say where his path will ultimately lead.`
      },
      {
        id: 9,
        name: "Hanzo",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/full-portrait.png",
        role: "Damage",
        difficulty: 3,
        counters: [
          "Ashe",
          "Baptiste",
          "Bastion",
          "Orisa",
          "Reaper",
          "Sombra",
          "Torbjorn"
        ],
        counteredBy: [
          "D.Va",
          "Genji",
          "Tracer",
          "Reinhardt",
          "Widowmaker",
          "Winston"
        ],
        abilities: [
          {
            id: 1,
            ability: "Storm Bow",
            type: "Active",
            description: `Hanzo nocks and fires an arrow at his target.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/e/e3/Ability-hanzo1.png/200px-Ability-hanzo1.png?version=38271f6312b90c6e97e7c81033712f2e",
            videoUrl: "https://youtu.be/5F1tbC_coRc"
          },
          {
            id: 2,
            ability: "Sonic Arrow",
            type: "Active",
            description: `Hanzo launches an arrow that contains a sonar tracking device. Any enemy within its detection radius is visibly marked, making them easier for Hanzo and his allies to hunt down.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/76/Ability-hanzo2.png?version=ac0a75e021115ff3090c0b18cb9be03b",
            videoUrl: "https://youtu.be/-VHqpBpyTvQ"
          },
          {
            id: 3,
            ability: "Storm Arrows",
            type: "Active",
            description: `Hanzo’s next several arrows fire instantly, but at reduced damage.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/bd/Ability-hanzo03.png?version=d627bbef374851f6de9c309fd7d3dcbd",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "Lunge",
            type: "Active",
            description: `Hanzo can double jump, allowing him to change direction mid-jump.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/57/Ability-hanzo01.png?version=09c75fbc8ac246746e9ff274e4b077c3",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Dragonstrike",
            type: "Ultimate",
            description: `Hanzo summons a Spirit Dragon which travels through the air in a line. It passes through walls in its way, devouring any enemies it encounters.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/44/Ability-hanzo4.png?version=904697da682f2fa2e66844115685a026",
            videoUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/44/Ability-hanzo4.png?version=904697da682f2fa2e66844115685a026"
          }
        ],
        story: `Mastering his skills as a bowman and an assassin, Hanzo Shimada strives to prove himself as a warrior without peer. The Shimada family was established centuries ago, a clan of assassins whose power grew over the years, enabling them to build a vast criminal empire that profited from lucrative trade in arms and illegal substances. As the eldest son of the family's head, Hanzo was bound by duty to succeed his father and rule the Shimada empire. From a young age, he was trained for that responsibility, displaying a natural aptitude for leadership and possessing an innate understanding of strategy and tactics. He also excelled in more practical areas: he was a prodigy in martial arts, swordplay, and bowmanship. Upon the death of his father, the clan elders instructed Hanzo to straighten out his wayward younger brother so that he, too, might help rule the Shimada empire. When his brother refused, Hanzo was forced to kill him. This act broke Hanzo's heart and drove him to reject his father's legacy, ultimately leading him to abandon the clan and all that he had worked so hard to attain. Now, Hanzo travels the world, perfecting his skills as a warrior, attempting to restore his honor and put the ghosts of his past to rest.`
      },
      {
        id: 10,
        name: "Junkrat",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/full-portrait.png",
        role: "Damage",
        difficulty: 2,
        counters: [
          "Bastion",
          "Brigitte",
          "D.Va",
          "Orisa",
          "Reaper",
          "Reinhardt",
          "Sombra",
          "Torbjorn",
          "Tracer"
        ],
        counteredBy: ["Baptiste", "Genji", "Pharah", "Widowmaker", "Zarya"],
        abilities: [
          {
            id: 1,
            ability: "Frag Launcher",
            type: "Active",
            description: `Junkrat's Frag Launcher lobs grenades a significant distance. They bounce to reach their destination, and blow up when they strike an enemy.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/a/ab/Ability-Junkrat1.png/200px-Ability-Junkrat1.png?version=bd1228de6cd38e2c5cfdeccfc06fb309",
            videoUrl: "https://youtu.be/SdGx4KK-Nrk"
          },
          {
            id: 2,
            ability: "Concussion Mine",
            type: "Active",
            description: `After placing one of his homemade Concussion Mines, Junkrat can trigger it to damage enemies and send them flying... or propel himself through the air.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/87/Ability-Junkrat2.png?version=da67bc430f9a64212eb1cacc9764026f",
            videoUrl: "https://youtu.be/0wcahJdwI9w"
          },
          {
            id: 3,
            ability: "Steel Trap",
            type: "Active",
            description: `Junkrat tosses out a giant, metal-toothed trap. Should an enemy wander too close to the trap, it clamps on, injuring and immobilizing them.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9c/Ability-Junkrat3.png?version=0247b41a32fbe90237b4a25f4c84a588",
            videoUrl: "https://youtu.be/DewTVB5AAEU"
          },
          {
            id: 4,
            ability: "RIP-Tire",
            type: "Ultimate",
            description: `Junkrat revs up a motorized tire bomb and sends it rolling across the battlefield, climbing over walls and obstacles. He can remotely detonate the RIP-Tire to deal serious damage to enemies caught in the blast, or just wait for it to explode on its own.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/32/Ability-Junkrat5.png?version=a8b2f51f1f0d5c74374f666037fbbc06",
            videoUrl: "https://youtu.be/-RkhEO40DG8"
          },
          {
            id: 5,
            ability: "Total Mayhem",
            type: "Passive",
            description: `Junkrat's deranged sense of humor persists past his death. If killed, he drops several live grenades.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/18/Ability-Junkrat4.png?version=71f7ae6c1651a5226e8f2a48b8e2a966",
            videoUrl: "https://youtu.be/tIF8sSY3pM0"
          }
        ],
        story: `Junkrat is an explosives-obsessed freak who lives to cause chaos and destruction. The attack on the Australian omnium's fusion core forever altered the landscape of the Outback. After the detonation, the area was transformed into a harsh, irradiated wasteland, littered with debris and the twisted fragments of the ruined facility, and unlivable to most. But there were some who survived. Calling themselves the Junkers, they scavenged the husk of the omnium and formed a lawless, cutthroat society in its shadow. Junkrat was one of them, eking out a living reclaiming metal and components from the ruins. Like many others, he was affected by the lingering radiation. This touch of madness made him ideal for handling dangerous explosives, a love which he turned into an obsession. He came to notoriety when he discovered an extremely valuable secret in the bones of the omnium. Though few knew the nature of what he found, he was nonetheless pursued by bounty hunters, gangs, and opportunists wherever he went, until he made a deal with the Junker enforcer Roadhog, who grudgingly agreed to be his personal bodyguard in exchange for a fifty-fifty share of the spoils. Now, with Roadhog in tow, Junkrat has left the Outback, and embarked upon an international crime spree leaving nothing but havoc and bedlam in his wake.`
      },
      {
        id: 11,
        name: "Lúcio",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/full-portrait.png",
        role: "Support",
        difficulty: 2,
        counters: [],
        counteredBy: [
          "Ana",
          "McCree",
          "Pharah",
          "Roadhog",
          "Sombra",
          "Winston"
        ],
        abilities: [
          {
            id: 1,
            ability: "Sonic Amplifier",
            type: "Active",
            description: `Lúcio can hit his enemies with sonic projectiles.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/b8/Ability-Lucio1.png?version=90fc9997140fccaa5477bad8760fb388",
            videoUrl: "https://youtu.be/-F1R6l8E6xw"
          },
          {
            id: 2,
            ability: "Soundwave",
            type: "Active",
            description: `Lúcio can knock his enemies back with a blast of sound.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0e/Ability-Lucio5.png?version=55091ea282a1eee9af09eb403c50c579",
            videoUrl: "https://youtu.be/-F1R6l8E6xw"
          },
          {
            id: 3,
            ability: "Crossfade",
            type: "Active",
            description: `Lúcio continuously energizes himself — and nearby teammates — with music. He can switch between two songs: one amplifies movement speed, while the other regenerates health.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a0/Ability-Lucio2.png?version=04bc66ae685d59948ed712e452b1f1c5",
            videoUrl: "https://youtu.be/GpHuVeiGZVk"
          },
          {
            id: 4,
            ability: "Amp It Up",
            type: "Active",
            description: `Lúcio increases the volume on his speakers, boosting the effects of his songs.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/3f/Ability-Lucio3.png?version=1094ab607900ac94fe512c61112178b4",
            videoUrl: "https://youtu.be/qvDQEK27HT0"
          },
          {
            id: 5,
            ability: "Sound Barrier",
            type: "Ultimate",
            description: `Protective waves radiate out from Lúcio’s Sonic Amplifier, briefly providing him and nearby allies with personal shields.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/24/Ability-Lucio4.png?version=019c8926ca3ab654667d1ab4bebd5489",
            videoUrl: "https://youtu.be/XPDaGrytc3s"
          },
          {
            id: 6,
            ability: "Wall Ride",
            type: "Passive",
            description: `Jump onto a wall to ride along it.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/b0/Ability-passive.png?version=2c09b7d7afa45948f7f0376e65ba7f9c",
            videoUrl: ""
          }
        ],
        story: `Lúcio is an international celebrity who inspires social change through his music and actions. Lúcio Correia dos Santos grew up in Rio de Janeiro, in a poor and crowded favela that was hit hard by the financial upheaval following the Omnic Crisis. As Brazil began the long process of recovery, he wanted to find a way to lift the spirits of those around him. He found his answer in music and its power to bring people together and even help them forget their troubles, if only for a short time. He performed on street corners, in block parties, and as he got older, at a string of legendary underground shows. But Lúcio's close-knit community was thrown into chaos when the multinational Vishkar Corporation secured a contract to redevelop large tracts of the city. Lúcio and his neighbors had been told that the development would improve their lives. However, that promise never became a reality. Vishkar imposed controls on the residents in the name of building a more orderly society: enforcing curfews, cracking down on what the company perceived as lawless behavior, and exploiting the populace as a cheap labor force. Lúcio wouldn't stand for it. He stole Vishkar sonic technology that had been used to suppress the people, and he converted it into a tool to rally them to action. In a popular uprising, they drove Vishkar out of their neighborhoods. Lúcio's leadership made him a star overnight and a symbol for positive social change. His music skyrocketed in popularity. Whereas he had once performed locally, he was now filling arenas across the world. With his newfound fame, Lúcio realizes that he has an opportunity to make a difference and change the world for the better.`
      },
      {
        id: 12,
        name: "McCree",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/full-portrait.png",
        role: "Damage",
        difficulty: 2,
        counters: [
          "Doomfist",
          "Lucio",
          "Mercy",
          "Moira",
          "Pharah",
          "Reaper",
          "Sombra",
          "Symmetra",
          "Zenyatta"
        ],
        counteredBy: ["D.Va", "Roadhog", "Widowmaker", "Winston"],
        abilities: [
          {
            id: 1,
            ability: "Peacekeeper",
            type: "Active",
            description: `McCree fires off a round from his trusty six-shooter.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/0/08/Ability-mccree1.png/200px-Ability-mccree1.png?version=c8fa661183b3e62d6e91b281a21e1219",
            videoUrl: "https://youtu.be/ZgGehXoYchA"
          },
          {
            id: 2,
            ability: "Fan the Hammer",
            type: "Active",
            description: `McCree can fan the Peacekeeper’s hammer to swiftly unload the entire cylinder.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/0/08/Ability-mccree1.png/200px-Ability-mccree1.png?version=c8fa661183b3e62d6e91b281a21e1219",
            videoUrl: "https://youtu.be/ZgGehXoYchA"
          },
          {
            id: 3,
            ability: "Combat Roll",
            type: "Active",
            description: `McCree dives in the direction he’s moving, effortlessly reloading his Peacekeeper in the process.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9e/Ability-mccree2.png?version=d02884cf8c85b375dd1f212765435811",
            videoUrl: "https://youtu.be/62JjTe-Cpw8"
          },
          {
            id: 4,
            ability: "Flashbang",
            type: "Active",
            description: `McCree heaves a blinding grenade that explodes shortly after it leaves his hand. The blast staggers enemies in a small radius.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/18/Ability-mccree3.png?version=bad65520188846eac06baeed1b2ed866",
            videoUrl: "https://youtu.be/ZDj8U7uTahs"
          },
          {
            id: 5,
            ability: "Deadeye",
            type: "Ultimate",
            description: `Focus. Mark. Draw. McCree takes a few precious moments to aim; when he’s ready to fire, he shoots every enemy in his line of sight. The weaker his targets are, the faster he’ll line up a killshot.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/68/Ability-mccree4.png?version=4bbba6ca4e1ba972f137d08e0877215f",
            videoUrl: "https://youtu.be/KrP8CJVSsd8"
          }
        ],
        story: `Armed with his Peacekeeper revolver, the outlaw Jesse McCree doles out justice on his own terms. McCree had already made a name for himself as a member of the notorious Deadlock Gang, which trafficked in illicit weapons and military hardware throughout the American Southwest, when he and his associates were busted in an Overwatch sting operation. With his expert marksmanship and resourcefulness, he was given the choice between rotting in a maximum-security lockup and joining Blackwatch, Overwatch's covert ops division. He chose the latter. Although he was initially cynical, he came to believe that he could make amends for his past sins by righting the injustices of the world. McCree appreciated the flexibility afforded to the clandestine Blackwatch, unhindered by bureaucracy and red tape. But as Overwatch's influence waned, rogue elements within Blackwatch sought to bring down the organization and turn it to their own ends. Wanting no part of the infighting, McCree set off alone and went underground. He resurfaced several years later as a gunslinger for hire. But while McCree's talents are sought after by parties great and small, he fights only for causes he believes are just.`
      },
      {
        id: 13,
        name: "Mei",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/mei/full-portrait.png",
        role: "Damage",
        difficulty: 3,
        counters: [
          "Baptiste",
          "D.Va",
          "Genji",
          "Reinhardt",
          "Roadhog",
          "Sigma",
          "Sombra",
          "Wrecking Ball",
          "Mercy",
          "Zenyatta"
        ],
        counteredBy: ["Orisa", "Pharah", "Widowmaker", "Zarya"],
        abilities: [
          {
            id: 1,
            ability: "Endothermic Blaster",
            type: "Active",
            description: `Mei’s blaster unleashes a concentrated, short-range stream of frost that damages, slows, and ultimately freezes enemies in place.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d8/Ability-mei1.png?version=00269b8c21d0d8735e73c5be4fcb0ad4",
            videoUrl: ""
          },
          {
            id: 2,
            ability: "Icicle",
            type: "Active",
            description: `Mei can also use her blaster to shoot icicle-like projectiles at medium range.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d8/Ability-mei1.png?version=00269b8c21d0d8735e73c5be4fcb0ad4",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Cryo-Freeze",
            type: "Active",
            description: `Mei instantly surrounds herself with a block of thick ice. She heals and ignores damage while encased, but cannot move or use abilities.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2b/Ability-mei2.png?version=4d3addd257e2f2c9d923e44b3b93a376",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "Ice Wall",
            type: "Active",
            description: `Mei generates an enormous ice wall that obstructs lines of sight, stops movement, and blocks attacks.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ea/Ability-mei3.png?version=ffe86a29e9530245186af260d8fd3659",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Blizzard",
            type: "Ultimate",
            description: `Mei deploys a weather-modification drone that emits gusts of wind and snow in a wide area. Enemies caught in the blizzard are slowed and take damage; those who linger too long are frozen solid.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f0/Ability-mei4.png?version=12a57172ec77eed3f921ba834998d3f0",
            videoUrl: ""
          }
        ],
        story: `Mei is a scientist who has taken the fight to preserve the environment into her own hands. Though many blamed the planet's escalating, unexplained climate phenomena on the advent of new technologies, the rapidly growing omnic population, and drastically increased consumption of resources, the true cause remained unknown. To find a solution, Overwatch established a series of eco-Watchpoints at remote, critical locations worldwide. Mei-Ling Zhou was a member of this multiyear initiative. A peerless climatologist, she had introduced cutting-edge innovations in the field of climate manipulation that protected at-risk areas in Asia and beyond. She was assigned to the program's monitoring station at Watchpoint: Antarctica when disaster struck: a sudden, catastrophic polar storm battered the installation and cut it off from the outside world, leaving the facility damaged and the scientists stranded. As their supplies dwindled, they entered cryostasis in a last-ditch effort to survive until a rescue attempt could be made. But that rescue never came. It was years later when the team's cryogenics chamber was finally discovered. Mei, still in hibernation, was the only survivor. The world Mei awoke to had gone through considerable changes: Overwatch was no more, the serious climate issues had worsened, and none of the eco-Watchpoints were in operation. Any clues that they had uncovered were lost. Mei has decided to continue her work on her own. Equipped with a portable version of her climate-manipulation technology, she travels around the world, hoping to re-establish the eco-network and track down the causes of the threats to the planet's ecosystem.`
      },
      {
        id: 14,
        name: "Mercy",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/full-portrait.png",
        role: "Support",
        difficulty: 1,
        counters: [],
        counteredBy: [
          "Ashe",
          "D.Va",
          "Genji",
          "McCree",
          "Mei",
          "Reaper",
          "Roadhog",
          "Soldier: 76",
          "Sombra",
          "Widowmaker",
          "Tracer",
          "Winston"
        ],
        abilities: [
          {
            id: 1,
            ability: "Caduceus Staff",
            type: "Active",
            description: `Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally’s health or increase the amount of damage they deal.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/f4/Ability-mercy1.png/200px-Ability-mercy1.png?version=e54e45a4d3315c2d04e53701b6e92bae",
            videoUrl: "https://youtu.be/jJ3o1B8FSqo"
          },
          {
            id: 2,
            ability: "Caduceus Blaster",
            type: "Active",
            description: `Mercy shoots a round from her sidearm. It's best reserved for emergency personal defense.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/48/Ability-mercy2.png?version=6034a2426bc725771fd5ccceeb3932c3",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Guardian Angel",
            type: "Active",
            description: `Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ea/Ability-mercy3.png?version=f52ad9d5c546cbe23bc818bc7b8853d7",
            videoUrl: "https://youtu.be/brizxqFv5T4"
          },
          {
            id: 4,
            ability: "Resurrect",
            type: "Active",
            description: `Mercy brings a dead ally back into the fight with full health.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/3e/Ability-mercy5.png?version=076ee9bc379f7088f0ad4dd5ffc7c911",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Valkyrie",
            type: "Ultimate",
            description: `Gain the ability to fly. Mercy’s abilities are enhanced.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f9/Ability-mercy6.png?version=92792f6490776398dbb56cdc6da4360e",
            videoUrl: ""
          },
          {
            id: 6,
            ability: "Regeneration",
            type: "Passive",
            description: `Mercy automatically heals over time.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/b0/Ability-passive.png?version=2c09b7d7afa45948f7f0376e65ba7f9c",
            videoUrl: ""
          },
          {
            id: 7,
            ability: "Angelic Descent",
            type: "Passive",
            description: `Propelled by her Valkyrie suit, Mercy slows the speed of her descent from great heights.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e9/Ability-mercy4.png?version=765c048564cfb3cd685772cff0ef6fa1",
            videoUrl: "https://youtu.be/E4AoSUEldFo"
          }
        ],
        story: `A guardian angel to those who come under her care, Dr. Angela Ziegler is a peerless healer, a brilliant scientist, and a staunch advocate for peace. Ziegler rose to become the head of surgery at a prominent Swiss hospital before pioneering a breakthrough in the field of applied nanobiology that radically improved the treatment of life-threatening illnesses and injuries. It was this expertise that attracted the attention of Overwatch. Because her parents had been taken by war, Ziegler was opposed to the organization's militaristic approach to keeping global peace. Ultimately, she recognized that Overwatch offered her the opportunity to save lives on a much larger scale. As Overwatch's head of medical research, Angela sought to leverage her work for healing in frontline crises. The result was the Valkyrie swift-response suit, which Ziegler herself piloted on many Overwatch missions. Despite her contributions to Overwatch, she was often at odds with her superiors and the organization's overarching aims. When Overwatch dissolved, Ziegler dedicated herself to helping those affected by war. Though she spends most of her time caring for the broken and dispossessed in crisis areas around the world, Dr. Ziegler can be counted on to don her Valkyrie suit whenever innocents are imperiled.`
      },
      {
        id: 15,
        name: "Moira",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/moira/full-portrait.png",
        role: "Support",
        difficulty: 2,
        counters: ["Genji", "Orisa", "Reinhardt"],
        counteredBy: ["Ana", "Baptiste", "D.Va", "McCree"],
        abilities: [
          {
            id: 1,
            ability: "Biotic Grasp(Primary)",
            type: "Active",
            description: `Using her left hand, Moira expends biotic energy to heal allies in front of her.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/d7/Ability_Moira_Biotic_Grasp.png/200px-Ability_Moira_Biotic_Grasp.png?version=1d6a51cfe19a91ee6e5de2a78fc5217a",
            videoUrl: ""
          },
          {
            id: 2,
            ability: "Biotic Grasp(Secondary)",
            type: "Active",
            description: `Her right hand fires a long-range beam weapon that saps enemies’ health, healing Moira and replenishing her biotic energy.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5f/Ability_Moira_Biotic_Grasp_Alt_fire.png?version=fd2aac6d9666e0de8986585e67f38d40",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Biotic Orb",
            type: "Active",
            description: `Moira launches a rebounding biotic sphere; she can choose between a regeneration effect that heals the allies it passes through, or a decay effect that deals damage to enemies.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a9/Ability_Moira_Biotic_Orb.png?version=c2872b52cdc32dfaade30b14f54dcbd0",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "Fade",
            type: "Active",
            description: `Moira's movement speed increases while making her invulnerable to damage.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/48/Ability_Moira_Fade.png?version=9cd7b33715c2dac7050f404f9a218a35",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Coalescence",
            type: "Ultimate",
            description: `Moira channels a long-range beam that heals allies, damages enemies, and bypasses barriers.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/05/Ability_Moira_Coalescence.png?version=4678ed1e9704a15ab1fc1eb18d59e165",
            videoUrl: ""
          }
        ],
        story: `Equal parts brilliant and controversial, scientist Moira O'Deorain is on the cutting edge of genetic engineering, searching for a way to rewrite the fundamental building blocks of life. Over a decade ago, O'Deorain made waves when she published a controversial paper detailing a methodology for creating custom genetic programs that could alter DNA at a cellular level. It seemed like a promising step toward overcoming diseases and disorders and maximizing human potential. Dissent among her peers soon followed. Many considered her work to be dangerous because of its perceived ethical shortfalls, and O'Deorain was even accused of having the same unchecked desire for scientific advancement that some believed had caused the Omnic Crisis. In addition, other geneticists were unable to reproduce the results of Moira's research, which further called her discoveries into question. Instead of kickstarting her career, her paper seriously damaged her reputation. She received a lifeline in an offer from an unlikely source: Overwatch's covert ops division, Blackwatch. She continued her work in the shadows while developing new weapons and technologies for the organization. Her employment was a closely kept secret, until it was uncovered during inquiries following the Venice incident. Many high-ranking Overwatch officials disavowed all knowledge of her affiliation with them. After Overwatch was disbanded, O'Deorain was forced to turn to unconventional sources of funding. This time, she was invited to join the scientific collective that had founded the city of Oasis. Yet some have whispered that the shadowy Talon organization had already been supporting her for years, aiding her experiments in exchange for utilizing the results for their own purposes. Though O'Deorain will go to any lengths to make scientific breakthroughs, her work is still unknown to most of the world. But now that she has been freed from all constraints, it is only a matter of time before everything changes.`
      },
      {
        id: 16,
        name: "Orisa",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/orisa/full-portrait.png",
        role: "Tank",
        difficulty: 2,
        counters: [
          "Baptiste",
          "Doomfist",
          "Mei",
          "Soldier: 76",
          "Torbjorn",
          "Widowmaker"
        ],
        counteredBy: [
          "Genji",
          "Hanzo",
          "Moira",
          "Junkrat",
          "Reaper",
          "Symmetra",
          "Tracer"
        ],
        abilities: [
          {
            id: 1,
            ability: "Fusion Driver",
            type: "Active",
            description: `Orisa’s automatic projectile cannon delivers sustained damage, but slows her movement while she fires it.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/4a/Ability_Orisa_Fusion_Driver.png/200px-Ability_Orisa_Fusion_Driver.png?version=9541bd74b99b1f059fbc2aa6eae37432",
            videoUrl: ""
          },
          {
            id: 2,
            ability: "Halt!",
            type: "Active",
            description: `Launch a graviton charge which can be detonated with the same action. The sphere slows and pulls nearby enemies to it.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/22/Ability_Orisa_Halt%21.png?version=614c913ebcf212f86f5e5c44e4ee6fd6",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Fortify",
            type: "Active",
            description: `Orisa temporarily reduces damage she takes and cannot be affected by movement-impairing effects.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f6/Ability_Orisa_Fortify.png?version=3d7148130d784cc2ee4e5c5257efddf6",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "Protective Barrier",
            type: "Active",
            description: `Orisa throws out a stationary barrier that can protect her and her allies from enemy fire.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/92/Ability_Orisa_Protective_Barrier.png?version=7446aa5b1614602c243789471631ef8d",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Supercharger",
            type: "Ultimate",
            description: `Orisa deploys a device to increase damage inflicted by allies within her line of sight.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a4/Ability_Orisa_Supercharger.png?version=ba9e9f1a46b5b60cd52634cc88aae9cb",
            videoUrl: ""
          }
        ],
        story: `Built from parts of one of Numbani's short-lived OR15 defense robots, Orisa is the city's newest protector, though she still has much to learn. Originally put into service before the Omnic Crisis, the OR14 "Idina" line of security robots was built in Nigeria's massive manufacturing omnium. After the war, they were taken out of production, along with many of the other models used during the crisis. Twenty years later, Numbani revived and recommissioned the OR14 program to protect the city from external threats. These new OR15s were deployed for a short time before they were destroyed in an attack by Doomfist. Following the attack, the program was scrapped, and the civic government sold off the remaining OR15 inventory. Some parts were purchased by eleven-year-old Efi Oladele, a brilliant girl whose early accomplishments in robotics and artificial intelligence had already earned her the Adawe Foundation's "genius grant." With the approval of her understanding and open-minded parents, Efi spent the bulk of her grant money to acquire one of the decommissioned OR15 bots. She believed that Numbani needed a protector and that an upgraded OR15 could do just that. Efi repaired and reconfigured the robot and installed a personality core that she had designed herself. She named Numbani's newest hero Orisa. Orisa has shown that she can be of service to the city, but she is still working toward finding her optimal protocols. The omnic's inexperience can cause her to be an occasional liability. Fortunately, between Efi's willingness to make the necessary modifications and Orisa's adaptive artificial intelligence, both robot and creator have always been able to set things right. As Orisa starts her career as a guardian, she has much to learn about the world and her functionality. But as long as she is guided by Efi's boundless optimism and her own growing sense of honor and duty, Orisa stands ready to protect Numbani and her creator at any cost.`
      },
      {
        id: 17,
        name: "Pharah",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/full-portrait.png",
        role: "Damage",
        difficulty: 1,
        counters: [
          "Bastion",
          "Brigitte",
          "Doomfist",
          "Genji",
          "Lucio",
          "Junkrat",
          "Mei",
          "Reaper",
          "Reinhardt",
          "Symmetra",
          "Torbjorn",
          "Zarya"
        ],
        counteredBy: [
          "Ana",
          "Ashe",
          "D.Va",
          "McCree",
          "Soldier: 76",
          "Widowmaker",
          "Zenyatta"
        ],
        abilities: [
          {
            id: 1,
            ability: "Rocket Launcher",
            type: "Active",
            description: `Pharah’s primary weapon launches rockets that deal significant damage in a wide blast radius.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/78/Ability-parah1.png/200px-Ability-parah1.png?version=477900375b5d570f6a93a79f403ddbd8",
            videoUrl: "https://youtu.be/4VhjPI33ZFQ"
          },
          {
            id: 2,
            ability: "Jump Jet",
            type: "Active",
            description: `Propelled by her suit’s thrusters, Pharah soars high into the air.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/14/Ability-parah2.png?version=16f5106ab202c23d8d442733535a93cf",
            videoUrl: "https://youtu.be/wt3GtTGKjWo"
          },
          {
            id: 3,
            ability: "Concussive Blast",
            type: "Active",
            description: `Pharah looses a wrist rocket that knocks back any enemies it strikes.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/c/ce/Ability-parah3.png?version=b691db0913c3402f190665587f25b4a3",
            videoUrl: "https://youtu.be/Jeo6h_Z_JAU"
          },
          {
            id: 4,
            ability: "Barrage",
            type: "Ultimate",
            description: `Pharah directs a continuous salvo of mini-rockets to destroy groups of enemies.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/8/8f/Ability-parah4.png?version=d193b86ef138d2133573bb97897af1a4",
            videoUrl: "https://youtu.be/B-Rign7c6yY"
          },
          {
            id: 5,
            ability: "Hover Jets",
            type: "Active",
            description: `Hold to hover.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/b0/Ability-passive.png?version=2c09b7d7afa45948f7f0376e65ba7f9c",
            videoUrl: ""
          }
        ],
        story: `Fareeha Amari's commitment to duty runs in her blood. She comes from a long line of highly decorated soldiers and burns with the desire to serve with honor. As a child, Fareeha dreamed of following in her mother's footsteps and joining the global peacekeeping force, Overwatch. She enlisted in the Egyptian army, and her dogged persistence and tactical prowess caused her to rise up through the officer ranks. She was a courageous leader and earned the loyalty of all who served under her. With her exemplary record, Fareeha was well placed to join the ranks of Overwatch, but before she had that opportunity, Overwatch was disbanded. After leaving the army with a commendation for distinguished service, she was offered employment with Helix Security International, a private security firm contracted to defend the artificial intelligence research facility beneath the Giza Plateau. The top-secret facility was touted as vital to the safety of not only the region but countries across the globe. Fareeha gladly accepted the choice assignment and received training in the Raptora Mark VI, an experimental combat suit designed for rapid mobility and devastating firepower. Under the call sign "Pharah," she works to safeguard the AI installation. Though she mourns Overwatch's passing, she still dreams of fighting the good fight and making a difference on a global scale.`
      },
      {
        id: 18,
        name: "Reaper",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/reaper/full-portrait.png",
        role: "Damage",
        difficulty: 1,
        counters: [
          "Brigitte",
          "Doomfist",
          "D.Va",
          "Mercy",
          "Orisa",
          "Reinhardt",
          "Roadhog",
          "Sigma",
          "Sombra",
          "Torbjorn",
          "Winston",
          "Wrecking Ball",
          "Zarya",
          "Zenyatta"
        ],
        counteredBy: [
          "Ashe",
          "Hanzo",
          "Junkrat",
          "Pharah",
          "McCree",
          "Widowmaker"
        ],
        abilities: [
          {
            id: 1,
            ability: "Hellfire Shotguns",
            type: "Active",
            description: `Reaper tears enemies apart with twin shotguns.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/df/Ability-reaper1.png/200px-Ability-reaper1.png?version=3a07c3b1d1693233273bba00e87d41b6",
            videoUrl: "https://youtu.be/z1RyND7eIYE"
          },
          {
            id: 2,
            ability: "Wraith Form",
            type: "Active",
            description: `Reaper becomes a shadow for a short period of time. While in this form, he takes no damage and is able to pass through enemies, but cannot fire his weapons or use other abilities.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/66/Ability-reaper2.png?version=1a33566cfa5f71da9a816097cadaaf60",
            videoUrl: "https://youtu.be/6aqY62EHPSA"
          },
          {
            id: 3,
            ability: "Shadow Step",
            type: "Active",
            description: `After marking a destination, Reaper disappears and reappears at that location.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/97/Ability-reaper3.png?version=74fcc0a5268ac38e8c1bf4967184e66c",
            videoUrl: "https://youtu.be/tA4v77rouK4"
          },
          {
            id: 4,
            ability: "Death Blossomo",
            type: "Ultimate",
            description: `In a blur of motion, Reaper empties both Hellfire Shotguns at breakneck speed, dealing massive damage to all nearby enemies.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/ac/Ability-reaper4.png?version=2bcb5b9807d7ad7e421b2d4a7df763de",
            videoUrl: "https://youtu.be/g2NZsSyRA9s"
          },
          {
            id: 5,
            ability: "The Reaping",
            type: "Passive",
            description: `Reaper steals health from his enemies as he damages them.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/57/Ability-reaper5.png?version=49095120f44314329d4788f43661589d",
            videoUrl: ""
          }
        ],
        story: `Some speak of a black-robed terrorist known only as the Reaper. His identity and motives are a mystery. What is known is that where he appears, death follows. The Reaper is an extremely volatile mercenary, a ruthless and remorseless killer responsible for terrorist attacks across the world. He has fought in many armed conflicts in the last decades, showing no loyalty to any cause or organization. Survivors have described a black shadow ghosting unscathed through the most hellish battlefields. The few bodies recovered of those he kills are pale, empty husks drained of life, their cells showing signs of intense degradation. It is possible that he is a byproduct of failed genetic alteration which forces his cells to simultaneously decay and regenerate at a hyper-accelerated rate. Those attempting to track his movements have begun to see a pattern in his appearances. They believe that Reaper is hunting former Overwatch agents and systematically eliminating them.`
      },
      {
        id: 19,
        name: "Reinhardt",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/full-portrait.png",
        role: "Tank",
        difficulty: 1,
        counters: ["Ashe", "Hanzo", "Soldier: 76", "Widowmaker"],
        counteredBy: [
          "Bastion",
          "Doomfist",
          "Junkrat",
          "Mei",
          "Moira",
          "Pharah",
          "Reaper",
          "Sombra",
          "Symmetra",
          "Torbjorn"
        ],
        abilities: [
          {
            id: 1,
            ability: "Rocket Hammer",
            type: "Active",
            description: `Reinhardt’s Rocket Hammer is an exemplary melee weapon, able to deal punishing damage in a wide arc with every swing.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/c/c4/Ability-reinhardt1.png/200px-Ability-reinhardt1.png?version=c6df80775dc74395a9709280fc2f88b5",
            videoUrl: "https://youtu.be/Ua8WIr2EiL8"
          },
          {
            id: 2,
            ability: "Barrier Field",
            type: "Active",
            description: `Reinhardt projects a broad, forward-facing energy shield, which can absorb substantial damage before it is destroyed. Though Reinhardt can protect himself and his companions behind the shield, he cannot attack while sustaining it.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/97/Ability-reinhardt2.png?version=fc9a66d235569838caf5b91056f8e870",
            videoUrl: "https://youtu.be/s6LUaSrHYCA"
          },
          {
            id: 3,
            ability: "Fire Strike",
            type: "Active",
            description: `By whipping his Rocket Hammer forward, Reinhardt slings a flaming projectile which pierces and damages any enemies it touches.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/99/Ability-reinhardt4.png?version=7876798781ffcf541cbf8191ab3e588c",
            videoUrl: "https://youtu.be/XAap0dyFKNI"
          },
          {
            id: 4,
            ability: "Earthshatter",
            type: "Ultimate",
            description: `Reinhardt forcefully slams his rocket hammer into the ground, knocking down and damaging all enemies in front of him.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/22/Ability-reinhardt5.png?version=79b280bf3b0820f786fdae8c923ab4ea",
            videoUrl: "https://youtu.be/DrnmH2-T2O4"
          },
          {
            id: 5,
            ability: "Steadfast",
            type: "Active",
            description: `Resistant to knock back effects.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e7/Passive-Reinhardt.png?version=e05995a0e3291b62cf93f96479449285",
            videoUrl: ""
          }
        ],
        story: `Reinhardt Wilhelm styles himself as a champion of a bygone age, who lives by the knightly codes of valor, justice, and courage. Over thirty years ago, Overwatch was founded to counter the threat of the robot uprisings around the world. Reinhardt, a highly decorated German soldier, was inducted as part of the original Overwatch strike team that put an end to the Omnic Crisis. After the conflict's resolution, Overwatch grew into a global institution, keeping the peace in a war-torn world. Reinhardt proved himself to be one of its most stalwart champions. Reinhardt's unique ethics and larger-than-life persona earned the admiration of his peers and superiors alike. Never afraid to speak his mind, he was Overwatch's most vocal supporter and, when necessary, its harshest critic, providing a constant reminder that Overwatch was meant to be a force for good. Having served into his late fifties, Reinhardt was faced with mandatory retirement from combat operations. Despondent about being removed from active duty, Reinhardt feared that his days of purpose and glory had ended. As times grew darker and Overwatch came under suspicion of corruption and sedition, Reinhardt could only watch as the cause he had dedicated his life to defending surrendered in disgrace. Though Overwatch was eventually disbanded, Reinhardt was not content to sit idly by while the world fell to disorder. Once again donning his Crusader armor, he has vowed to fight for justice across Europe like a knight of old, defending the innocent and winning hearts and minds with the promise of better days to come.`
      },
      {
        id: 20,
        name: "Roadhog",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/roadhog/full-portrait.png",
        role: "Tank",
        difficulty: 1,
        counters: [
          "Baptiste",
          "Bastion",
          "D.Va",
          "Genji",
          "Lucio",
          "McCree",
          "Sigma",
          "Soldier: 76",
          "Sombra",
          "Torbjorn",
          "Winston",
          "Wrecking Ball"
        ],
        counteredBy: ["Ana", "Mei", "Reaper", "Zarya", "Zenyatta"],
        abilities: [
          {
            id: 1,
            ability: "Scrap Gun (Short Range)",
            type: "Active",
            description: `Roadhog's Scrap Gun fires short-range blasts of shrapnel with a wide spread.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/f4/Ability-Roadhog1.png/200px-Ability-Roadhog1.png?version=1371b2d70c3474bdc374bf2da0610000",
            videoUrl: "https://youtu.be/v1CLYGVvQDA"
          },
          {
            id: 2,
            ability: "Scrap Gun (Long Range)",
            type: "Active",
            description: `Alternatively, it can launch a shrapnel ball that detonates farther away, scattering metal fragments from the point of impact.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/f4/Ability-Roadhog1.png/200px-Ability-Roadhog1.png?version=1371b2d70c3474bdc374bf2da0610000",
            videoUrl: "https://youtu.be/v1CLYGVvQDA"
          },
          {
            id: 3,
            ability: "Take a Breather",
            type: "Active",
            description: `Roadhog restores a chunk of his health over a brief period of time.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a0/Ability-Roadhog2.png?version=7eaffccfe236bc6da9e0c05788811a7e",
            videoUrl: "https://youtu.be/XWyYgyAM7OU"
          },
          {
            id: 4,
            ability: "Chain Hook",
            type: "Active",
            description: `Roadhog hurls his chain at a target; if it catches, he yanks them into close range.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/4d/Ability-Roadhog3.png?version=4f0abf824be636661872b76ecde4b430",
            videoUrl: "https://youtu.be/owP6uHjJd-E"
          },
          {
            id: 5,
            ability: "Whole Hog",
            type: "Ultimate",
            description: `After cramming a top-loader onto his Scrap Gun, Roadhog pours in ammo. For a short time, he can crank out a stream of shrapnel that knocks back enemies.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/95/Ability-Roadhog4.png?version=2c82c046cbaf0568f6cadc21ec0f79eb",
            videoUrl: "https://youtu.be/LJetuxosdo4"
          }
        ],
        story: `Roadhog is a ruthless killer with a well-earned reputation for cruelty and wanton destruction. After the Omnic Crisis, government officials gifted the Australian omnium and the surrounding area to the omnics that had nearly destroyed their country, hoping to establish a long-term peace accord. This arrangement permanently displaced Mako Rutledge and a large number of the Outback's residents, a scattered collection of survivalists, solar farmers, and people who just wanted to be left alone. Furious over the loss of their homes, Mako and others turned to violent rebellion. They formed the Australian Liberation Front and struck against the omnium and its robot population to take back the lands that had been stolen. Events continued to escalate until the rebels sabotaged the omnium's fusion core, resulting in an explosion that destroyed the facility, irradiated the region, and littered the Outback with twisted metal and wreckage for kilometers around. Mako watched as his home became an apocalyptic wasteland, and he was forever changed. Adapting to his environment, he donned a mask and took to the broken highways of the Outback on his ramshackle chopper. Little by little, his humanity was forgotten. The last vestiges of Mako faded away and the ruthless killer Roadhog was born.`
      },
      {
        id: 21,
        name: "Sigma",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/sigma/full-portrait.png",
        role: "Tank",
        difficulty: 3,
        counters: ["Bastion", "Hanzo", "Torbjorn", "Widowmaker"],
        counteredBy: [
          "D.Va",
          "Doomfist",
          "Genji",
          "Mei",
          "Reaper",
          "Roadhog",
          "Sombra",
          "Symmetra",
          "Winston",
          "Wrecking Ball",
          "Zarya"
        ],
        abilities: [
          {
            id: 1,
            ability: "Hyperspheres",
            type: "Active",
            description: `Sigma launches two gravitic charges, which bounce off walls and implode after a short duration, damaging enemies within a sizable radius.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a4/Abilities-sigma1.png?version=968538c87fb926080057f4fc08592f3c",
            videoUrl: ""
          },
          {
            id: 2,
            ability: "Experimental Barrier",
            type: "Active",
            description: `Sigma propels a floating barrier to a location of his choosing. He can dismiss the barrier at any time.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5d/Abilities-sigma2.png?version=e9ff879de19998505010a8a2ad7bbe05",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Kinetic Grasp",
            type: "Active",
            description: `Sigma freezes incoming projectiles in midair, converting them into shields.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/7a/Abilities-sigma3.png?version=6053142b210badaae10f6a3a0649ff38",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "Accretion",
            type: "Active",
            description: `Sigma gathers a mass of debris and flings it at an enemy to knock them down`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9c/Abilities-sigma4.png?version=2574489e3b6f51278c5d4a9fd7748035",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Gravitic Flux",
            type: "Ultimate",
            description: `Unleashing his full powers, Sigma takes flight, lifts enemies in a targeted area, and launches them into the sky before slamming them back down.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/42/Abilities-sigma5.png?version=94e60b39a932d16ef5cace8b90be1be9",
            videoUrl: ""
          }
        ],
        story: `Brilliant astrophysicist Dr. Siebren de Kuiper's life changed forever when an experiment gone wrong gave him the ability to control gravity; now, Talon manipulates him to their own ends. De Kuiper was considered a pioneer in his field. His life's work involved devising a way to harness the power of gravity. Equally known for his groundbreaking research and eccentric personality, he conducted most of his studies from his lab in The Hague. Believing that he was close to achieving his goal, he performed his most important experiment on an international space station. But something went wrong, triggering the brief formation of a black hole. De Kuiper was only exposed to its power for a moment, but he suffered serious psychological damage. The area around him began to experience strange fluctuations in gravity, peaking and dropping in time with his reactions. He had to be evacuated immediately. Upon returning to Earth, De Kuiper was quarantined in a secret government facility. Between his ravings about the patterns of the universe, the psychic damage he sustained, and the gravitic anomalies happening around him, he was deemed unsafe and detained for years under the name "Subject Sigma." Isolated and unable to control his powers, De Kuiper retreated into his own mind. He thought he would never see the outside world again. When Talon discovered De Kuiper's existence, they infiltrated the facility and broke him out, planning to use his brilliance and research to further their plans. In their custody, De Kuiper slowly gained control of his powers. Now, gravity moved according to his will, and he was closer than ever to achieving his life's goal. But the same experiment that had opened his mind had also fractured it, and he struggled to keep the pieces together. De Kuiper continues to develop his powers in hopes of unlocking the secrets of the universe, unaware that Talon is using both him and his research.`
      },
      {
        id: 22,
        name: "Soldier: 76",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/full-portrait.png",
        role: "Damage",
        difficulty: 1,
        counters: ["Baptiste", "Bastion", "Mercy", "Pharah", "Torbjorn"],
        counteredBy: ["Orisa", "Reinhardt", "Roadhog", "Widowmaker"],
        abilities: [
          {
            id: 1,
            ability: "Heavy Pulse Rifle",
            type: "Active",
            description: `Soldier: 76’s rifle remains particularly steady while unloading fully-automatic pulse fire.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/c/cc/Icon-ability.hpr.png/200px-Icon-ability.hpr.png?version=7f7fd0ebf6f46bb6a7a1105b4020a759",
            videoUrl: "https://youtu.be/tYiBHcpVk-E"
          },
          {
            id: 2,
            ability: "Helix Rockets",
            type: "Active",
            description: `Tiny rockets spiral out of Soldier: 76’s Pulse Rifle in a single burst. The rockets’ explosion damages enemies in a small radius.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f3/Icon-ability.helixrockets.png?version=856f47956cec7909a4cf95db8caacdfa",
            videoUrl: "https://youtu.be/DJHWtNg01yw"
          },
          {
            id: 3,
            ability: "Sprint",
            type: "Active",
            description: `Whether he needs to evade a firefight or get back into one, Soldier: 76 can rush ahead in a burst of speed. His sprint ends if he takes an action other than charging forward.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/bd/Icon-ability.sprint.png?version=1d17fe6eb379dc4b2d7973911bcff98f",
            videoUrl: "https://youtu.be/C1509v3OPhY"
          },
          {
            id: 4,
            ability: "Biotic Field",
            type: "Active",
            description: `Soldier: 76 plants a biotic emitter on the ground. Its energy projection restores health to 76 and any of his squadmates within the field.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/50/Icon-ability.bioticfield.png?version=fc7c830c60de3339210883792c823564",
            videoUrl: "https://youtu.be/7PE1mQ3RF3E"
          },
          {
            id: 5,
            ability: "Tactical Visor",
            type: "Ultimate",
            description: `Soldier: 76’s pinpoint targeting visor “locks” his aim on the threat closest to his crosshairs. If an enemy leaves his line of sight, Soldier: 76 can quickly switch to another target.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d1/Icon-ability.tacticalvisor.png?version=a6ca6c743799ab24cd74ba83f9c5f75f",
            videoUrl: "https://youtu.be/LzxggNa3-js"
          }
        ],
        story: `Currently the target of an international manhunt, the vigilante known as Soldier: 76 wages a personal war to expose the truth behind Overwatch's collapse. Soldier: 76 revealed himself in a string of attacks that crisscrossed the globe, targeting financial institutions, shadowy corporations, and secure Overwatch facilities. Though to the outside world his motives are inscrutable, there are those who claim that he is a former Overwatch agent, determined to shed light on the conspiracy that brought down the organization. While his true identity remains a mystery, he is believed to have been trained as a member of the American "soldier enhancement program." He possesses physical capabilities exceeding those of a conventional soldier's, as well as other augmentations that make him a peerless combatant. In addition, he utilizes a cutting-edge arsenal, much of it stolen in raids on Overwatch installations. Unrelenting in his search to find those responsible for Overwatch's fall, Soldier: 76 will stop at nothing to bring them to justice.`
      },
      {
        id: 23,
        name: "Sombra",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/sombra/full-portrait.png",
        role: "Damage",
        difficulty: 3,
        counters: [
          "Baptiste",
          "Brigitte",
          "D.Va",
          "Doomfist",
          "Lucio",
          "Mercy",
          "Reinhardt",
          "Sigma",
          "Symmetra",
          "Tracer",
          "Wrecking Ball",
          "Zenyatta"
        ],
        counteredBy: [
          "Hanzo",
          "Junkrat",
          "McCree",
          "Mei",
          "Reaper",
          "Roadhog",
          "Winston"
        ],
        abilities: [
          {
            id: 1,
            ability: "Machine Pistol",
            type: "Active",
            description: `Sombra’s fully-automatic machine pistol fires in a short-range spread.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/a/a4/Ability_Sombra_Machine_Pistol.png/200px-Ability_Sombra_Machine_Pistol.png?version=e1423379dd602b8148408b64aaf2b0fb",
            videoUrl: "https://youtu.be/lQZPnOCPZsg"
          },
          {
            id: 2,
            ability: "Hack",
            type: "Active",
            description: `Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/6d/Ability_Sombra_Hack.png?version=88e47105c3ab411d73205866710678ee",
            videoUrl: "https://youtu.be/w4TMi3dQWBU"
          },
          {
            id: 3,
            ability: "Stealth",
            type: "Active",
            description: `Sombra becomes invisible for a short period of time, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/35/Ability_Sombra_Thermoptic_Camo.png?version=401391c4f152209088fdf5dee6f9363c",
            videoUrl: "https://youtu.be/qVKR5PnBp7I"
          },
          {
            id: 4,
            ability: "Translocator",
            type: "Active",
            description: `Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight).`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/61/Ability_Sombra_Translocator.png?version=77ff058088cbf19ae269c0228e1f2c44",
            videoUrl: "https://youtu.be/W7-dZPRUf2E"
          },
          {
            id: 5,
            ability: "EMP",
            type: "Ultimate",
            description: `Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/c/c7/Ability_Sombra_EMP.png?version=034446574cc9394703034aafe0ecce10",
            videoUrl: "https://youtu.be/lbb_uQFRIhQ"
          },
          {
            id: 6,
            ability: "Opportunist",
            type: "Passive",
            description: `Sombra detects critically injured enemies through walls.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/43/Ability_Sombra_Opportunist.png?version=06ef7825662b8cee7fce9c7436cf13b8",
            videoUrl: ""
          }
        ],
        story: `One of the world's most notorious hackers, Sombra uses information to manipulate those in power. Long before she took up the alias "Sombra," ░░░░░░ was among the thousands of children who were left orphaned in the aftermath of the Omnic Crisis. With much of her country's infrastructure destroyed, she survived by utilizing her natural gifts with hacking and computers. After ░░░░░░ was taken in by Mexico's Los Muertos gang, she aided it in its self-styled revolution against the government. Los Muertos believed that the rebuilding of Mexico had primarily benefited the rich and the influential, leaving behind those who were most in need of assistance. Following her many conquests, ░░░░░░ was supremely confident in her skills, but she was caught unprepared when she stumbled into the web of a global conspiracy—one that had also noticed her. With her security irreparably compromised, ░░░░░░ was forced to delete all traces of her identity and went into hiding. She later reemerged as Sombra, upgraded and determined to find out the truth behind the conspiracy she had uncovered. Sombra launched an even more audacious string of hacks, and her exploits earned her no shortage of admirers, including Talon. She joined the organization's ranks and is believed to have contributed to its massive cyberattacks against corporations with strong ties to their governments. These efforts incited a popular revolution in Mexico against LumériCo and breached the security of Volskaya Industries, the manufacturing arm of Russia's anti-omnic defense. Now, with Talon's extensive resources to call upon, Sombra can focus on her true goal: to unravel the conspiracy and use the power behind it to her own ends.`
      },
      {
        id: 24,
        name: "Symmetra",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/symmetra/full-portrait.png",
        role: "Damage",
        difficulty: 2,
        counters: ["Orisa", "Reinhardt", "Sigma"],
        counteredBy: ["McCree", "Pharah", "Sombra", "Widowmaker", "Winston"],
        abilities: [
          {
            id: 1,
            ability: "Photon Projector (Primary)",
            type: "Active",
            description: `Symmetra’s weapon emits a ranged beam. It deals continuous damage that increases the longer it is connected.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7e/Ability-symmetra1.png/200px-Ability-symmetra1.png?version=b9fd478f06515a5a11f3de229ca0db56",
            videoUrl: ""
          },
          {
            id: 2,
            ability: "Photon Projector (Secondary)",
            type: "Active",
            description: `The projector can also release an explosive energy ball that deals high damage on contact.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7e/Ability-symmetra1.png/200px-Ability-symmetra1.png?version=b9fd478f06515a5a11f3de229ca0db56",
            videoUrl: "https://youtu.be/w4TMi3dQWBU"
          },
          {
            id: 3,
            ability: "Sentry Turret",
            type: "Active",
            description: `Symmetra launches a small turret that automatically fires speed-reducing blasts at the nearest enemy within range. Up to three turrets can be built on the battlefield at once.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f4/Ability-symmetra2.png?version=20e03dbf2167e5764f9d50ef0fb1bc5b",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "Teleporter",
            type: "Active",
            description: `Symmetra places a temporary teleporter exit pad at a distance and connects it to a teleporter entry pad at her current location. Allies (and some of their abilities, such as Junkrat’s RIP-Tire) can travel from the entry pad to the exit pad instantly.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e0/Ability-symmetra4.png?version=42b2f96a7b705fec479fb9a879124dbc",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Photon Barrier",
            type: "Ultimate",
            description: `Symmetra deploys a massive energy barrier which prevents ranged attacks and is big enough to cut through the entire map.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d7/Photon_Barrier.png?version=f13c1364e617e4e853bf015082bedd69",
            videoUrl: ""
          }
        ],
        story: `Symmetra literally bends reality. By manipulating hard-light constructs, she crafts the world as she wishes it to be, in hopes of engineering a perfect society. Following the Omnic Crisis, the Vishkar Corporation of southern India began the laborious process of creating new, self-sustaining cities to house the nation's displaced population. One such city, Utopaea, was created using radical hard-light technology that enabled its architechs to shape the city's streets, utilities, and living spaces in the blink of an eye. After she was identified as one of the few capable of becoming a light-bending architech, young Satya Vaswani was plucked from extreme poverty and placed in the care of Vishkar's architech academy, never to return home. Isolated and lonely in her new life, Satya immersed herself in her education and training. She quickly grasped the applications of the technology and was one of the top students in her class. Satya approached hard-light manipulation differently than her peers, with their more procedural, mechanical constructions, instead weaving her constructs in the motions of the traditional dance of her homeland. Though she was one of Utopaea's top architechs, the Vishkar Corporation saw far greater potential in Satya's abilities. Giving her the moniker "Symmetra," Vishkar sent her on clandestine missions around the world to uphold its corporate interests and expand its influence into other countries. Symmetra believes her actions serve the greater good in society. But there are times when she wonders whether the control and order she desires are truly best for humanity.`
      },
      {
        id: 25,
        name: "Torbjörn",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/torbjorn/full-portrait.png",
        role: "Damage",
        difficulty: 2,
        counters: [
          "Brigitte",
          "Reinhardt",
          "Tracer",
          "Winston",
          "Wrecking Ball"
        ],
        counteredBy: [
          "Ana",
          "Ashe",
          "Baptiste",
          "D.Va",
          "Genji",
          "Hanzo",
          "Junkrat",
          "Orisa",
          "Pharah",
          "Reaper",
          "Roadhog",
          "Soldier: 76",
          "Widowmaker",
          "Zarya"
        ],
        abilities: [
          {
            id: 1,
            ability: "Rivet Gun (Primary Fire)",
            type: "Active",
            description: `Torbjörn fires rivets at long range.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/b2/Ability-torbjorn1.png/200px-Ability-torbjorn1.png?version=416a016cdc58c4c400cf860e3f08f111",
            videoUrl: "https://youtu.be/KBkfGVjdt3c"
          },
          {
            id: 2,
            ability: "Rivet Gun (Secondary Fire)",
            type: "Active",
            description: `Torbjörn ejects molten metal from his gun in a short, close-range burst.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/b2/Ability-torbjorn1.png/200px-Ability-torbjorn1.png?version=416a016cdc58c4c400cf860e3f08f111",
            videoUrl: "https://youtu.be/KBkfGVjdt3c"
          },
          {
            id: 3,
            ability: "Forge Hammer",
            type: "Active",
            description: `This multipurpose hammer repairs turrets and, in a pinch, can also be used as a weapon.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/3/37/Ability-torbjorn2.png/200px-Ability-torbjorn2.png?version=a5fa67fe2d19b09808a921f48bf79412",
            videoUrl: "https://youtu.be/yXl485iR8_E"
          },
          {
            id: 4,
            ability: "Deploy Turret",
            type: "Active",
            description: `Torbjörn deploys a self-building turret which automatically tracks and attacks enemies.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a7/Ability-torbjorn3.png?version=fdefda1d8f0094b4ad1d6aaea27653fa",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Overload",
            type: "Active",
            description: `Torbjörn gains additional armor as well as improved attack, movement, and reload speed for a brief period.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/af/Ability-torbjorn4.png?version=18eed42b062dee56f7d428cc26dd7585",
            videoUrl: ""
          },
          {
            id: 6,
            ability: "Molten Core",
            type: "Ultimate",
            description: `Torbjörn creates pools of molten slag that deal massive, sustained damage (plus bonus damage to armor), and can prevent enemies from moving through key locations.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ef/Ability-torbjorn5.png?version=77f0f32f768a6d7d75ec31ac139ca377",
            videoUrl: ""
          }
        ],
        story: `At its height, Overwatch possessed one of the most advanced armaments on the planet, which could be traced to the workshop of an ingenious engineer named Torbjörn Lindholm. Before the Omnic Crisis, Torbjörn had gained notoriety for designing weapons systems used by countries around the world. However, his belief that technology must serve a better vision for humanity put him at odds with his employers, who desired to control his weapons using networked computer intelligence. Torbjörn had a deep mistrust of sentient robotic intelligence, and while many of his peers wrote this off as paranoia, his worst fears were realized when the robot populations of the world turned against their human creators during the Omnic Crisis. Because of his engineering genius, he was recruited to join the original Overwatch strike team, and his many inventions proved integral to ending the crisis. In the years that followed, Overwatch became an international peacekeeping force, and Torbjörn remained a critical resource for all of its technological needs and signature weapons systems. But in the aftermath of Overwatch's fall, many of Torbjörn's weapons were stolen or stashed away around the world. Feeling responsible for his creations, Torbjörn is determined to stop them from falling into the wrong hands and wreaking havoc on the innocent.`
      },
      {
        id: 26,
        name: "Tracer",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/full-portrait.png",
        role: "Damage",
        difficulty: 2,
        counters: ["Ana", "Bastion", "Hanzo", "Mercy", "Orisa", "Zenyatta"],
        counteredBy: ["Brigitte", "Junkrat", "Sombra", "Torbjorn", "Winston"],
        abilities: [
          {
            id: 1,
            ability: "Pulse Pistols",
            type: "Active",
            description: `Tracer rapid-fires both of her pistols.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/ff/Ability-tracer1.png/200px-Ability-tracer1.png?version=91441edba6537e685f5495546ae96353",
            videoUrl: "https://youtu.be/DOXR7rOvGOQ"
          },
          {
            id: 2,
            ability: "Blink",
            type: "Active",
            description: `Tracer zips horizontally through space in the direction she’s moving, and reappears several yards away. She stores up to three charges of the blink ability and generates more every few seconds.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/54/Ability-tracer2.png?version=f2ebaaaf6d632fa0a18a0e565ba85305",
            videoUrl: "https://youtu.be/50d5qnAPrR8"
          },
          {
            id: 3,
            ability: "Recall",
            type: "Active",
            description: `Tracer bounds backward in time, returning her health, ammo and position on the map to precisely where they were a few seconds before.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/63/Ability-tracer3.png?version=7a73ab501ed31c36f0a359267774535d",
            videoUrl: "https://youtu.be/eFdC4mW0SMI"
          },
          {
            id: 4,
            ability: "Pulse Bomb",
            type: "Ultimate",
            description: `Tracer lobs a large bomb that adheres to any surface or unfortunate opponent it lands on. After a brief delay, the bomb explodes, dealing high damage to all enemies within its blast radius.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/af/Ability-tracer4.png?version=769b3c3822fbb86c0ce1e7f29abc8cc2",
            videoUrl: "https://youtu.be/Sf_ku0-PPoc"
          }
        ],
        story: `The former Overwatch agent known as Tracer is a time-jumping adventurer and an irrepressible force for good. Lena Oxton (call sign: "Tracer") was the youngest person ever inducted into Overwatch's experimental flight program. Known for her fearless piloting skills, she was handpicked to test the prototype of a teleporting fighter, the Slipstream. But during its first flight, the aircraft's teleportation matrix malfunctioned, and it disappeared. Lena was presumed dead. She reappeared months later, but her ordeal had greatly changed her: her molecules had been desynchronized from the flow of time. Suffering from "chronal disassociation," she was a living ghost, disappearing for hours and days at a time. Even for the brief moments she was present, she was unable to maintain physical form. Overwatch's doctors and scientists were stumped, and Tracer's case seemed hopeless until a scientist named Winston designed the chronal accelerator, a device capable of keeping Tracer anchored in the present. In addition, it gave Tracer the ability to control her own time, allowing her to speed it up and slow it down at will. With her newfound skills, she became one of Overwatch's most effective agents. Since Overwatch's dissolution, Tracer has continued to right wrongs and fight the good fight wherever the opportunity presents itself.`
      },
      {
        id: 27,
        name: "Widowmaker",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/full-portrait.png",
        role: "Damage",
        difficulty: 2,
        counters: [
          "Ana",
          "Ashe",
          "Baptiste",
          "Bastion",
          "Brigitte",
          "Hanzo",
          "Junkrat",
          "McCree",
          "Mei",
          "Mercy",
          "Pharah",
          "Reaper",
          "Soldier: 76",
          "Symmetra",
          "Torbjorn",
          "Zenyatta"
        ],
        counteredBy: [
          "D.Va",
          "Genji",
          "Orisa",
          "Reinhardt",
          "Winston",
          "Wrecking Ball"
        ],
        abilities: [
          {
            id: 1,
            ability: "Widow's Kiss (Scoped)",
            type: "Active",
            description: `Widowmaker’s versatile sniper rifle is ideal for scope-aimed shots at distant targets.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/bf/Ability-widowmaker1.png/200px-Ability-widowmaker1.png?version=f2f0f3afd75eb70f8a6e845a4c8371ca",
            videoUrl: "https://youtu.be/Ojo3o1WUBuk"
          },
          {
            id: 2,
            ability: "Widow's Kiss (Automatic)",
            type: "Active",
            description: `Should targets close to medium range, the rifle can also be fired in fully-automatic mode.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/bf/Ability-widowmaker1.png/200px-Ability-widowmaker1.png?version=f2f0f3afd75eb70f8a6e845a4c8371ca",
            videoUrl: "https://youtu.be/Ojo3o1WUBuk"
          },
          {
            id: 3,
            ability: "Grappling Hook",
            type: "Active",
            description: `Widowmaker launches a grappling hook towards the location she’s aiming at – when the hook connects with a scalable surface, she’s quickly drawn towards it, allowing her to expand her view of the battlefield and evade or flank targets.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5b/Ability-widowmaker2.png?version=5e5e9462f2725c7053aaafa48e414a04",
            videoUrl: "https://youtu.be/9jhlW9qDCgM"
          },
          {
            id: 4,
            ability: "Venom Mine",
            type: "Active",
            description: `Widowmaker adheres a swiftly-arming venom mine to nearly any surface. When a target wanders within range of the mine’s motion trigger, it explodes, delivering poison gas to any enemies in the vicinity.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/08/Ability-widowmaker3.png?version=9e58a3a36e46b251db2b11960198349e",
            videoUrl: "https://youtu.be/iKTYhDbgNbY"
          },
          {
            id: 5,
            ability: "Infra-Sight",
            type: "Ultimate",
            description: `Widowmaker’s recon visor allows her to see the heat signatures of her targets through walls and objects for a moderate amount of time. This enhanced vision is shared with her allies.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/94/Ability-widowmaker4.png?version=f618c87c8ee30e71593931abc4ae931b",
            videoUrl: "https://youtu.be/HNwtVvOXHj8"
          }
        ],
        story: `Widowmaker is the perfect assassin: a patient, ruthlessly efficient killer who shows neither emotion nor remorse. It is believed that in her former life, Widowmaker was married to Gérard Lacroix, an Overwatch agent spearheading operations against the Talon terrorist organization. After several unsuccessful attempts to eliminate Gérard, Talon decided to change its focus to his wife, Amélie. Talon operatives kidnapped her and subjected her to an intense program of neural reconditioning. They broke her will, suppressed her personality, and reprogrammed her as a sleeper agent. She was eventually found by Overwatch agents, apparently none the worse for wear, and returned to her normal life. Two weeks later she killed Gérard in his sleep. Her mission complete, Amélie returned to Talon, and they completed the process of turning her into a living weapon. She was given extensive training in the covert arts, and then her physiology was altered, drastically slowing her heart, which turned her skin cold and blue and numbed her ability to experience human emotion. Amélie was gone. Now, Widowmaker is Talon's most effective assassin, feeling little save the satisfaction of a job well done.`
      },
      {
        id: 28,
        name: "Winston",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/winston/full-portrait.png",
        role: "Tank",
        difficulty: 2,
        counters: [
          "Ana",
          "Baptiste",
          "Genji",
          "Hanzo",
          "Lucio",
          "McCree",
          "Mercy",
          "Sigma",
          "Sombra",
          "Symmetra",
          "Tracer",
          "Widowmaker"
        ],
        counteredBy: ["Bastion", "D.Va", "Reaper", "Roadhog", "Torbjorn"],
        abilities: [
          {
            id: 1,
            ability: "Tesla Cannon",
            type: "Active",
            description: `Winston’s weapon fires a short-range electric barrage for as long as he holds down the trigger.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/1/17/Ability-winston1.png/200px-Ability-winston1.png?version=cd698dbcb3e770418a4a690282b4096a",
            videoUrl: "https://youtu.be/Alu4z5t3IEI"
          },
          {
            id: 2,
            ability: "Jump Pack",
            type: "Active",
            description: `Assisted by his energy pack, Winston lunges through the air, dealing significant damage and staggering nearby enemies when he lands.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/64/Ability-winston2.png?version=fe80934286c36defe434d9f06036c80d",
            videoUrl: "https://youtu.be/E6iqCIE2STc"
          },
          {
            id: 3,
            ability: "Barrier Projector",
            type: "Active",
            description: `Winston’s barrier projector extends a bubble-shaped field that absorbs damage until it's destroyed. Allies protected by the barrier can return fire from within it.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/13/Ability-winston3.png?version=f5a6800f8d99ed5c7acbafc2239b74f2",
            videoUrl: "https://youtu.be/uUAOPsocCis"
          },
          {
            id: 4,
            ability: "Primal Rage",
            type: "Ultimate",
            description: `Winston embraces his animal nature, significantly boosting his health and making him very difficult to kill, strengthening his melee attack, and allowing him to use his Jump Pack ability more frequently. While raging, Winston can only make melee and Jump Pack attacks.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/1/10/Ability-winston4.png?version=2d2e5ff2cc5554387ecc208b7e137880",
            videoUrl: "https://youtu.be/g5maSCxyH2Q"
          }
        ],
        story: `A super-intelligent, genetically engineered gorilla, Winston is a brilliant scientist and a champion for humanity's potential. The Horizon Lunar Colony was established as a first step for humanity's renewed exploration of space. Among its residents was a group of genetically enhanced gorillas that were intended to test the effects of prolonged habitation in space. One gorilla displayed such rapid brain development from the gene therapy that he was taken under the wing of Dr. Harold Winston, who taught him science and inspired him with tales of human ingenuity. The young gorilla passed his days assisting with the scientists' experiments, watching the distant blue world outside his habitat window, dreaming of the endless possibilities that awaited him there. But his life was thrown into chaos when the other gorillas led an uprising, killed the mission scientists, and claimed the colony for their own. Taking on the name of his beloved human caretaker, Winston built a makeshift rocket and escaped to Earth. There he found a new home with Overwatch, an organization that represented everything he had come to admire about humanity. Winston was finally able to live up to the heroic ideal that had been instilled in him. Now with the fall of Overwatch, Winston has gone into seclusion, once again cut off from the world he believes in, but longing for the days of heroism to return.`
      },
      {
        id: 29,
        name: "Wrecking Ball",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/wrecking-ball/full-portrait.png",
        role: "Tank",
        difficulty: 3,
        counters: ["Ashe", "Baptiste", "Sigma", "Widowmaker"],
        counteredBy: [
          "Ana",
          "Bastion",
          "Brigitte",
          "Mei",
          "Reaper",
          "Roadhog",
          "Sombra",
          "Torbjorn"
        ],
        abilities: [
          {
            id: 1,
            ability: "Quad Cannons",
            type: "Active",
            description: `Wrecking Ball’s automatic assault cannons tear apart threats at medium range.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/9/92/Quad_cannons.png/200px-Quad_cannons.png?version=3ab33001f309abe0c43e3e659908907d",
            videoUrl: ""
          },
          {
            id: 2,
            ability: "Grappling Claw",
            type: "Active",
            description: `Wrecking Ball launches a grappling claw, enabling him to anchor to an area and swing from it. If he strikes an enemy with a powered-up swing, they’re damaged and knocked back.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/fe/Grappling_claw.png?version=580253468bbf0921934700d0ff4afc7b",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Roll",
            type: "Active",
            description: `Wrecking Ball transforms into a ball, increasing his maximum movement speed.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2b/Ability-mei2.png?version=4d3addd257e2f2c9d923e44b3b93a376",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "Adaptive Shield",
            type: "Active",
            description: `Wrecking Ball’s temporary personal shields absorb damage, providing stronger defenses if more opponents are nearby.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/94/Adaptive_shield.png?version=9072e837b9664d8cc59e4ed89b062542",
            videoUrl: ""
          },
          {
            id: 5,
            ability: "Piledriver",
            type: "Active",
            description: `Wrecking Ball slams onto the ground below, damaging enemies and launching them upward.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0b/Piledriver.png?version=6aeae2ad7ac6774cd20be2dfc375f21f",
            videoUrl: ""
          },
          {
            id: 6,
            ability: "Minefield",
            type: "Ultimate",
            description: `Wrecking Ball deploys a field of long-lasting proximity mines which explode on contact with enemies.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/32/Minefield.png?version=e934b16afb03bca76f12e7abcb9846b4",
            videoUrl: ""
          }
        ],
        story: `In one of the many experiments carried out at Horizon Lunar Colony, animals were given genetic therapy to assess their adaptation to extended periods of habitation on the moon. As an unexpected side effect, several of them exhibited exceptional growth in physical size and brain function. While most of the test subjects were gorillas or other primates, there were some exceptions, including a hamster named Hammond. Like the others, Hammond's intelligence grew, and he became more curious about the world around him. Much to the puzzlement and amusement of the scientists, Hammond would frequently escape into different parts of the moon base. Though they'd always find him and return him to his cell, they never figured out the true purpose behind his nightly escapades. What they didn't know was that Hammond was busy teaching himself the skills of a mechanic, which would soon come in handy. The colony was eventually thrown into chaos when some of the gorillas rose up against the human scientists and took control. Not all of the animals participated, however, and one of the gorillas, Winston, was making a plan to escape to earth. Hammond sensed his opportunity. He built a makeshift capsule and secretly hitched it to Winston's craft as the gorilla blasted off. As the two entered earth's atmosphere, Hammond broke off and landed in a different location: the wasteland of the Australian Outback. Hammond modified his escape pod to enter the lucrative mech battle arena of the Scrapyard. Working his way up the ranks, "Wrecking Ball" went from contender to champion, though the pilot's identity remained a mystery to all. Gathering his winnings, Hammond was able to upgrade his mech enough to survive the dangerous trek out of the Junker-controlled Outback. Now free to travel and do as he pleases, Hammond is exploring the world and finding new adventures along the way.`
      },
      {
        id: 30,
        name: "Zarya",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/full-portrait.png",
        role: "Tank",
        difficulty: 3,
        counters: [
          "D.Va",
          "Genji",
          "Junkrat",
          "Mei",
          "Roadhog",
          "Sigma",
          "Torbjorn"
        ],
        counteredBy: ["Baptiste", "Bastion", "Pharah", "Reaper", "Zenyatta"],
        abilities: [
          {
            id: 1,
            ability: "Particle Cannon (Primary)",
            type: "Active",
            description: `Zarya’s mighty Particle Cannon unleashes a short-range beam of destructive energy.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/48/Ability-zarya1.png/200px-Ability-zarya1.png?version=c9d166ce994e6ea88064558971b378c9",
            videoUrl: "https://youtu.be/owR560Bwbd4"
          },
          {
            id: 2,
            ability: "Particle Cannon (Secondary)",
            type: "Active",
            description: `Alternatively, Zarya can lob an explosive charge to strike multiple opponents.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/48/Ability-zarya1.png/200px-Ability-zarya1.png?version=c9d166ce994e6ea88064558971b378c9",
            videoUrl: "https://youtu.be/owR560Bwbd4"
          },
          {
            id: 3,
            ability: "Particle Barrier",
            type: "Active",
            description: `The Particle Cannon can emit a personal barrier that shields Zarya against incoming attacks, redirecting their energy to enhance her weapon’s damage and the width of its beam.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/71/Ability-zarya2.png?version=538b4d60182130ebb7f3f3171fed4ce6",
            videoUrl: "https://youtu.be/Cnry70ViVw4"
          },
          {
            id: 4,
            ability: "Projected Barrier",
            type: "Active",
            description: `Zarya surrounds one of her teammates with an energy barrier that simultaneously absorbs fire and boosts the power of her Particle Cannon.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9e/Ability-zarya3.png?version=7317bb4f7e025ecf7fcae28eb8385c79",
            videoUrl: "https://youtu.be/XrHtlpai0cI"
          },
          {
            id: 5,
            ability: "Graviton Surge",
            type: "Ultimate",
            description: `Zarya launches a gravity bomb that draws in enemy combatants and deals damage while they’re trapped.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5d/Ability-zarya4.png?version=8d6905f7a41e16cb1c34825871297008",
            videoUrl: "https://youtu.be/e4EXaCcRbQk"
          },
          {
            id: 6,
            ability: "Energy",
            type: "Passive",
            description: `Damage blocked increases Particle Cannon damage.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/68/Passive-Zarya.png?version=7853bf980d9c3afe6bd1ea32ec004f1e",
            videoUrl: ""
          }
        ],
        story: `Aleksandra Zaryanova is one of the world's strongest women, a celebrated athlete who sacrificed personal glory to protect her family, friends, and country in a time of war. Aleksandra was born in a remote Siberian village that was on the front lines of the Omnic Crisis, which began some thirty years ago. Although Russian forces defeated the robots and shut down their omnium, the region was devastated by the conflict. Only a child at the time, Aleksandra was surrounded by the post-war destruction, and as she grew older, she swore that she would gain the strength to help her people recover. Focusing on weightlifting and bodybuilding, Aleksandra was identified by the national athletics program as a potential star. She trained extensively, moving up the ranks while representing her country, and was expected to shatter longstanding records in the upcoming world championships. But on the eve of the tournament, an attack came from the long-dormant Siberian omnium, and her village was thrust into war once again. Aleksandra immediately withdrew from the competition and rushed home to enlist in the local defense forces, sacrificing the life of fame and fortune she might have had. Now she serves—a symbol to some, a stalwart fellow soldier to others. But for Aleksandra, it is a chance to use her great strength to protect the ones she loves.`
      },
      {
        id: 31,
        name: "Zenyatta",
        imageUrl:
          "https://d1u1mce87gyfbn.cloudfront.net/hero/zenyatta/full-portrait.png",
        role: "Support",
        difficulty: 3,
        counters: ["D.Va", "Bastion", "Pharah", "Roadhog", "Zarya"],
        counteredBy: [
          "Ana",
          "Doomfist",
          "Genji",
          "McCree",
          "Mei",
          "Reaper",
          "Sombra",
          "Tracer",
          "Widowmaker"
        ],
        abilities: [
          {
            id: 1,
            ability: "Orb of Destruction (Primary Fire)",
            type: "Active",
            description: `Zenyatta projects his destructive energy orbs individually.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d1/Ability-zenyatta1.png?version=7b01b160f1e2eea0b5b280582ceb4314",
            videoUrl: "https://youtu.be/yiAaKKwuzPU"
          },
          {
            id: 2,
            ability: "Orb of Destruction (Secondary Fire)",
            type: "Active",
            description: `Zenyatta projects his destructive energy orbs in a rapid-fire volley after a few seconds spent gathering power.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d1/Ability-zenyatta1.png?version=7b01b160f1e2eea0b5b280582ceb4314",
            videoUrl: "https://youtu.be/yiAaKKwuzPU"
          },
          {
            id: 3,
            ability: "Orb of Harmony",
            type: "Active",
            description: `Zenyatta casts an orb over the shoulder of a targeted ally. So long as Zenyatta maintains line of sight, the orb slowly restores health to his ally. Only one ally can receive the orb's benefit at a time.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0c/Ability-zenyatta2.png?version=2cfcd78f6d13445cb5c9b69c47bb98e2",
            videoUrl: "https://youtu.be/81cEVFP_Nr4"
          },
          {
            id: 4,
            ability: "Orb of Discord",
            type: "Active",
            description: `Attaching the orb of discord to an opponent amplifies the amount of damage they receive for as long as Zenyatta maintains line of sight. Only one opponent can suffer the orb's effects at a time.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/04/Ability-zenyatta3.png?version=0b00d34a5f3f3f1a67e71956dbe60cc6",
            videoUrl: "https://youtu.be/AYi1kI6ei9Q"
          },
          {
            id: 5,
            ability: "Transcendence",
            type: "Ultimate",
            description: `Zenyatta enters a state of heightened existence for a short period of time. While transcendent, Zenyatta cannot use abilities or weapons, but is immune to damage and automatically restores his health and that of nearby allies.`,
            imageUrl:
              "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5e/Ability-zenyatta4.png?version=5926200c3924316294051403b3054b44",
            videoUrl: "https://youtu.be/W87APa-4hao"
          }
        ],
        story: `Zenyatta is an omnic monk who wanders the world in search of spiritual enlightenment. It is said that those who cross his path are never the same again. Years ago, following the Omnic Crisis, a group of outcast omnic robots experienced what they described as a spiritual awakening. They abandoned their preprogrammed lives to establish a communal monastery deep in the Himalayas. After many years of meditation on the nature of existence, they came to the belief that they were more than artificial intelligences and that, like humans, they possessed the essence of a soul. Recognizing the spiritual equality they held with humans, the monks, led by the enigmatic robot known as Tekhartha Mondatta, sought to heal the wounds caused by the Omnic Crisis a generation earlier and bring humans and robots back into societal harmony. Their message was embraced by millions around the world, and they became global celebrities. But one monk, Zenyatta, disagreed with this new direction. He believed that the way to repair the problems between humans and omnics was not through dogmatic teaching but through interpersonal connection and engagement. Ultimately, Zenyatta followed his own path. He chose to leave the monastery and wander the world, helping those he meets to overcome their personal struggles and find inner peace. But, when necessary, he will fight to protect the innocent, be they omnic or human.`
      }
    ]
  },
  maps: {
    id: 2,
    title: "Maps",
    routeName: "maps",
    map: [
      {
        id: 32,
        name: "Ayutthaya",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/ayutthaya.jpg",
        gameType: ["Capture The Flag"],
        subLocations: []
      },
      {
        id: 33,
        name: "Black Forest",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/black-forest.jpg",
        gameType: ["Elimination", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 34,
        name: "Blizzard World",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/blizzard-world.jpg",
        gameType: ["Assault/Escort"],
        subLocations: []
      },
      {
        id: 35,
        name: "Busan",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/busan.jpg",
        gameType: ["Control"],
        subLocations: [
          {
            id: 1,
            location: "Downtown",
            imageUrl:
              "https://www.pcgamesn.com/wp-content/uploads/2018/08/Overwatch-Busan-map.jpg"
          },
          {
            id: 2,
            location: "MEKA Base",
            imageUrl:
              "https://static.invenglobal.com/upload/image/2018/08/22/i1534936062240998.png"
          },
          {
            id: 3,
            location: "Sanctuary",
            imageUrl:
              "https://image.redbull.com/rbcom/052/2018-09-04/9c0385c1-fcf8-4f6f-ba8d-1ac4fdacfd15/0100/0/1/overwatch-new-map-busan-sanctuary.jpg"
          }
        ]
      },
      {
        id: 36,
        name: "Castillo",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/castillo.jpg",
        gameType: ["Elimination", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 37,
        name: "Château Guillard",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/chateau-guillard.jpg",
        gameType: ["Deathmatch", "Team Deathmatch"],
        subLocations: []
      },

      {
        id: 38,
        name: "Dorado",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/dorado.jpg",
        gameType: ["Deathmatch", "Escort", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 39,
        name: "EcoPoint: Antarctica",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/ecopoint-antarctica.jpg",
        gameType: ["Elimination", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 40,
        name: "Eichenwalde",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/eichenwalde.jpg",
        gameType: ["Deathmatch", "Assault/Escort", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 41,
        name: "Hanamura",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/hanamura.jpg",
        gameType: ["Assault"],
        subLocations: []
      },
      {
        id: 42,
        name: "Havana",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/havana.jpg",
        gameType: ["Escort"],
        subLocations: []
      },
      {
        id: 43,
        name: "Hollywood",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/hollywood.jpg",
        gameType: ["Assault/Escort", "Deathmatch", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 44,
        name: "Horizon Lunar Colony",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/horizon-lunar-colony.jpg",
        gameType: ["Assault"],
        subLocations: []
      },
      {
        id: 45,
        name: "Ilios",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/ilios.jpg",
        gameType: ["Control", "Capture The Flag"],
        subLocations: [
          {
            id: 1,
            location: "Lighthouse",
            imageUrl:
              "https://vignette.wikia.nocookie.net/overwatch/images/9/95/Ctfilios_lighthouse_8.png/revision/latest?cb=20170309011722"
          },
          {
            id: 2,
            location: "Ruins",
            imageUrl:
              "https://7crossroads.com/wp-content/uploads/2018/01/Ilios_controlpoint_ruins-1024x576.png"
          },
          {
            id: 3,
            location: "Well",
            imageUrl:
              "https://vignette.wikia.nocookie.net/overwatch/images/4/40/Ctfilios_well_7.png/revision/latest?cb=20170309012340"
          }
        ]
      },
      {
        id: 46,
        name: "Junkertown",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/junkertown.jpg",
        gameType: ["Escort"],
        subLocations: []
      },
      {
        id: 47,
        name: "King's Row",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/kings-row.jpg",
        gameType: ["Deathmatch", "Assault/Escort", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 48,
        name: "Lijiang Tower",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/lijiang-tower.jpg",
        gameType: ["Control", "Capture The Flag"],
        subLocations: [
          {
            id: 1,
            location: "Control Center",
            imageUrl:
              "https://vignette.wikia.nocookie.net/overwatch/images/6/6a/Lijiang_screenshot_24.jpg/revision/latest?cb=20160521224446"
          },
          {
            id: 2,
            location: "Garden",
            imageUrl:
              "https://vignette.wikia.nocookie.net/overwatch/images/9/94/Lijiang_screenshot_13.jpg/revision/latest?cb=20160521223155"
          },
          {
            id: 3,
            location: "Night Market",
            imageUrl:
              "https://vignette.wikia.nocookie.net/overwatch/images/f/fe/Lijiang_screenshot_5.jpg/revision/latest?cb=20160521222223"
          }
        ]
      },
      {
        id: 49,
        name: "Necropolis",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/necropolis.jpg",
        gameType: ["Elimination", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 50,
        name: "Nepal",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/nepal.jpg",
        gameType: ["Control", "Capture The Flag"],
        subLocations: [
          {
            id: 1,
            location: "Sanctum",
            imageUrl:
              "https://vignette.wikia.nocookie.net/overwatch/images/6/60/Nepal_screenshot_27.png/revision/latest?cb=20160711234504"
          },
          {
            id: 2,
            location: "Shrine",
            imageUrl:
              "https://vignette.wikia.nocookie.net/overwatch/images/f/fe/Nepal_screenshot_17.png/revision/latest?cb=20160711233151"
          },
          {
            id: 3,
            location: "Village",
            imageUrl:
              "https://vignette.wikia.nocookie.net/overwatch/images/f/fb/Nepal_screenshot_5.png/revision/latest?cb=20160711231621"
          }
        ]
      },
      {
        id: 51,
        name: "Numbani",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/numbani.jpg",
        gameType: ["Assault/Escort"],
        subLocations: []
      },
      {
        id: 52,
        name: "Oasis",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/oasis.jpg",
        gameType: ["Escort"],
        subLocations: [
          {
            id: 1,
            location: "City Center",
            imageUrl:
              "https://vignette.wikia.nocookie.net/overwatch/images/b/bc/Oasis_screenshot_7.png/revision/latest?cb=20161201014156"
          },
          {
            id: 2,
            location: "Gardens",
            imageUrl:
              "https://vignette.wikia.nocookie.net/overwatch/images/3/3f/Oasis_screenshot_18.png/revision/latest?cb=20161201015827"
          },
          {
            id: 3,
            location: "University",
            imageUrl:
              "https://vignette.wikia.nocookie.net/overwatch/images/4/40/Oasis_screenshot_27.png/revision/latest?cb=20161201021159"
          }
        ]
      },
      {
        id: 53,
        name: "Paris",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/paris.jpg",
        gameType: ["Control"],
        subLocations: []
      },
      {
        id: 54,
        name: "Petra",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/petra.jpg",
        gameType: ["Deathmatch", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 55,
        name: "Rialto",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/rialto.jpg",
        gameType: ["Escort"],
        subLocations: []
      },
      {
        id: 56,
        name: "Route 66",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/route-66.jpg",
        gameType: ["Escort"],
        subLocations: []
      },
      {
        id: 57,
        name: "Temple of Anubis",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/temple-of-anubis.jpg",
        gameType: ["Control"],
        subLocations: []
      },
      {
        id: 58,
        name: "Volskaya Industries",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/volskaya-industries.jpg",
        gameType: ["Control"],
        subLocations: []
      },
      {
        id: 59,
        name: "Watchpoint: Gibraltar",
        imageUrl:
          "https://static.playoverwatch.com/img/pages/maps/images/watchpoint-gibraltar.jpg",
        gameType: ["Escort"],
        subLocations: []
      }
    ]
  },
  roles: {
    id: 3,
    title: "Roles",
    routeName: "roles",
    role: [
      {
        id: 60,
        name: "Tank",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        heroes: ["D.Va", "Orisa", "Reinhardt", "Roadhog", "Sigma", "Winston"]
      },
      {
        id: 61,
        name: "Damage",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        heroes: [
          "Ashe",
          "Bastion",
          "Doomfist",
          "Genji",
          "Hanzo",
          "Junkrat",
          "McCree",
          "Mei",
          "Pharah",
          "Reaper",
          "Soldier: 76",
          "Sombra",
          "Symmetra",
          "Torbjörn",
          "Tracer",
          "Widowmaker"
        ]
      },
      {
        id: 62,
        name: "Support",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        heroes: [
          "Ana",
          "Baptiste",
          "Brigitte",
          "Lúcio",
          "Mercy",
          "Moira",
          "Zenyatta"
        ]
      }
    ]
  }
};

export default SECTION_DATA;

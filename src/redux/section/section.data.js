const SHOP_DATA : {
  heroes: {
    id: 1,
    title: "Heroes",
    routeName: "heroes",
    hero: [
      {
        id: 1,
        name: "Ana",
        imageUrl: "../../assets/hero-portraits/ana.png",
        role: "Support",
        difficulty: 3,
        counters: ["Baptiste", "Bastion", "Lucio", "Moira", "Pharah", "Roadhog", "Torbjorn", "Wrecking Ball", "Zenyatta"],
        counteredBy: ["Doomfist", "D.Va", "Genji", "Tracer", "Winston", "Widowmaker"],
        abilities: [
          {
            id: 1,
            ability: "Biotic Rifle",
            description: `Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.`,
            imageUrl: "",
            videoUrl: ""
          },
          {
            id: 2,
            ability: "Sleep Dart",
            description: `Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).`,
            imageUrl: "",
            videoUrl: ""
          },
          {
            id: 3,
            ability: "Biotic Grenade",
            description: `Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.`,
            imageUrl: "",
            videoUrl: ""
          },
          {
            id: 4,
            ability: "Nano Boost",
            description: `After Ana hits one of her allies with a combat boost, they deal more damage, and take less damage from enemies’ attacks.`,
            imageUrl: "",
            videoUrl: ""
          }
        ],
        backStory: `One of the founding members of Overwatch, Ana uses her skills and expertise to defend her home and the people she cares for. As the Omnic Crisis inflicted a heavy toll on Egypt, the country's depleted and undermanned security forces relied on elite snipers for support. Among them was Ana Amari, who was widely considered to be the world's best. Her superior marksmanship, decision-making, and instincts made her a natural selection to join the Overwatch strike team that would end the war. Following the success of Overwatch's original mission, Ana served for many years as Strike Commander Morrison's second-in-command. Despite her responsibilities in leading the organization, Ana refused to step away from combat operations. She remained on active duty well into her fifties, until she was believed to have been killed during a hostage rescue mission by the Talon operative known as Widowmaker. In truth, Ana survived that encounter, despite being gravely wounded and losing her right eye. During her recovery, she wrestled with the weight of a life spent in combat, and she chose to stay out of the world's growing conflicts. However, as time passed, she realized she could not sit on the sidelines while people threatened her city and the innocents around her. Now, Ana has rejoined the fight to protect her country from the forces that would destabilize it, and most importantly, to keep her family and her closest allies safe.`
      },
      {
        id: 2,
        name: "Ashe",
        imageUrl: "../../assets/hero-portraits/ashe.png",
        role: "Damage",
        difficulty: 2,
        counters: ["Baptiste", "Bastion", "Mercy", "Pharah", "Reaper", "Torbjorn"],
        counteredBy: ["Doomfist", "D.Va", "Genji", "Hanzo", "Reinhardt", "Widowmaker", "Wrecking Ball"],
        abilities: [],
        story: `Ashe is the ambitious and calculating leader of the Deadlock Gang and a respected figure in the criminal underworld. Born into a wealthy family, Ashe grew up surrounded by privilege. Her parents were highly sought-after business consultants and coaches for powerful CEOs around the world. Though her parents paid little attention to her (mostly leaving her in the care of the family’s omnic butler, Bob), they ensured that Ashe had every opportunity to succeed. But a chance meeting with a local ruffian, named Jesse McCree, and an impromptu string of crimes committed together opened her eyes to her true calling. The satisfaction of outwitting her targets and the thrill of getting away with it set her on the outlaw path. Along with the other three founders of the Deadlock Gang, Ashe started to make a name for herself with bigger and more extravagant heists. The Deadlock Gang’s rapid rise to prominence put them at odds with the other criminal organizations in the American Southwest; the encounters often became violent. After years of skirmishes and bloodshed, Ashe called the heads of the major groups together. Ashe saw the potential to grow the influence of all. She used what she’d learned from her parents’ business to bring order to these groups. Her proposal was that the gangs could work together (or at least, not work against each other). Her principles: keep your word, don’t work with the law, respect each other’s territory, and always punish betrayal. No longer having to focus her energies on squabbles with the other gangs, Ashe is now writing her name across the American Southwest with a string of audacious heists and operations that has put her at top of the authorities’ most-wanted lists and cemented her legacy as an outlaw legend.`
      },
      {
        id: 3,
        name: "Baptiste",
        imageUrl: "../../assets/hero-portraits/ana.png",
        role: "Support",
        difficulty: 3,
        counters: ["D.Va", "Junkrat", "Moira", "Zarya"],
        counteredBy: ["Ana", "Ashe", "Bastion", ""],
        abilities: [],
        story: `An elite combat medic and ex-Talon operative, Baptiste now uses his skills to help those whose lives have been impacted by war. Jean-Baptiste Augustin was one of the 30 million children orphaned by the Omnic Crisis. With limited opportunities and resources, he enlisted in the military. The Caribbean Coalition, a pan-island force formed in response to the Crisis, became his new home. Guided by his innate desire to help people, Baptiste chose the path of a combat medic and served in an elite branch of the Caribbean Coalition’s special ops. After his service was complete, Baptiste struggled to find a demand for his unique skills. He turned to one of the few opportunities open to him: joining the Talon mercenary group, one of the many organizations that were poised to profit off the chaos in the war's aftermath. For the first time ever, Baptiste had a taste of the good life. Talon's missions were easy and paid well, and he put aside some of his earnings to set up a clinic in his hometown. But slowly, his unit's orders escalated in brutality, expanding into assassinations and operations with civilian casualties. Confronted by his team's actions, Baptiste realized he was perpetuating a cycle of violence like the one that had destroyed his own community. He abandoned Talon, disgusted with what he had done and determined to forge a new path for himself. But Talon would not let him go. Baptiste knew too much, and they sent operatives after him to silence him. Agent after agent came for him, including Baptiste's former comrades. To stay under the radar, Baptiste drifted from place to place, aiding in humanitarian efforts around the globe. The few Talon members who managed to track him down were never seen again. Now, Baptiste works toward a better world, healing where he can and fighting when he must. He knows that he cannot undo his past—but that making a difference now is what matters.`
      },
      {
        id: 4,
        name: "Bastion",
        imageUrl: "../../assets/hero-portraits/baptiste.png",
        role: "Damage",
        difficulty: 1,
        counters: ["Reinhardt", "Winston", "Mercy"],
        counteredBy: ["Genji", "Widowmaker", "Hanzo"],
        abilities: [],
        story: `Once a frontline combatant in the devastating Omnic Crisis, this curious Bastion unit now explores the world, fascinated by nature but wary of a fearful humanity. Originally created for peacekeeping purposes, Bastion robot units possessed the unique ability to rapidly reconfigure themselves into an assault-cannon mode. But during the Omnic Crisis, they were turned against their human makers, forming the bulk of the omnics' rebel army. Following the resolution of the crisis, nearly all of them were destroyed or disassembled. To this day, Bastion units still symbolize the horrors of the conflict. One unique Bastion unit, severely damaged in the final battles of the war, was left forgotten for over a decade. It lay dormant, exposed to the elements and rusting while nature slowly reclaimed it. Overgrown with vines and roots and nested upon by small animals, the robot sat inert, seemingly unaware of the passing of time. That was until one fateful day, when it unexpectedly reactivated. With its combat programming all but lost, it instead displayed an intense curiosity about the natural world and its inhabitants. This inquisitive Bastion unit set out to explore its surroundings and discover its purpose on a war-ravaged planet. Though "Bastion" appears to be gentle—even harmless, at times—its core combat programming takes over when the unit senses danger, utilizing its entire arsenal to eliminate anything it perceives as a threat. This has led to instances of conflict with the few humans it has encountered, and has driven it to avoid populated areas in favor of the wild, uncharted regions of the world.`
      },
      {
        id: 5,
        name: "Brigitte",
        imageUrl: "../../assets/hero-portraits/brigitte.png",
        role: "Support",
        difficulty: 1,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `No longer sitting on the sidelines, Brigitte Lindholm has taken up arms to defend those in need of protection. The youngest daughter of weapons designer, Torbjörn Lindholm, Brigitte was the first of his children to show an interest in mechanical engineering. Brigitte spent much of her spare time in her father's workshop, learning the trade and honing her skills. Her aptitude for engineering mirrored that of her father's, but Brigitte's primary interest was in armor fabrication and defensive systems, unlike Torbjörn, who was world renowned (and perhaps infamous) for the weapons he created. Everyone expected that Brigitte would continue her apprenticeship and follow in her father's footsteps. But her plans changed due to influence of another prominent figure in her life, her father's close friend and fellow Overwatch agent, Reinhardt Wilhelm. A close friend of the family and Brigitte's godfather, Reinhardt told Brigitte tales of heroes and chivalry as she grew up. After his retirement and Overwatch's fall, Reinhardt declared that he would become a knight-errant on a quest to bring justice. Before he left on his adventures, Brigitte surprised him by asking to join him as his squire. Reinhardt accepted. As a squire, Brigitte had many responsibilities, the most important of which was the upkeep of Reinhardt's Crusader armor (a design she was familiar with as the current version was designed by her father). But more and more, she found her main job was taking care of Reinhardt himself, trying to protect him from his overenthusiasm even as his body was breaking down from years of combat. Eventually, she realized that serving only as a mechanic wasn't enough, and that the best way she could aid Reinhardt was to become a warrior in her own right. While Reinhardt trained her in combat, Brigitte began to build her own suit of armor in secret. Now Brigitte fights at Reinhardt's side to protect him, and any others in need as knight and squire journey to make the world a better place, one battle at a time.`
      },
      {
        id: 6,
        name: "D.Va",
        imageUrl: "../../assets/hero-portraits/d-va.png",
        role: "Tank",
        difficulty: 2,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `D.Va is a former professional gamer who now uses her skills to pilot a state-of-the-art mech in defense of her homeland. Twenty years ago, South Korea was attacked by a colossal omnic monstrosity that rose from the depths of the East China Sea. The massive, lumbering construct caused catastrophic damage to coastal cities before it was driven back beneath the waves. In response, the South Korean government developed a mechanized armored drone unit, called MEKA, to protect urban environments in future engagements with the omnic threat. The government's fears proved to be well founded, as a disturbing pattern of attacks emerged. Every few years, the monstrosity would rise from the sea to assault South Korea and its neighbors. The omnic learned from these encounters, often reconfiguring itself in a different form and appearing with new weapons and capabilities. Each incident ended in a stalemate, with the monstrosity defeated but not destroyed. As the omnic continued to adapt, it eventually disrupted MEKA's drone-control networks, forcing the military to place pilots in the mechs. Scrambling to find suitable candidates, the government turned to the country's professional gamers, who possessed the necessary reflexes and instincts to operate the mechs' advanced weapons systems. Top stars were drafted, including reigning world champion Hana Song, also known as "D.Va." Famous for her elite skills, D.Va was a fierce competitor who played to win at all costs, and she had a well-earned reputation for showing no mercy to her opponents. Seeing her new mission as a game, D.Va fearlessly charges into battle alongside the rest of her MEKA unit, ready to spring to her nation's defense at a moment's notice. Recently, she has begun to stream combat operations to her adoring fans, and her growing following has turned her into a global icon.`
      },
      {
        id: 7,
        name: "Doomfist",
        imageUrl: "../../assets/hero-portraits/doomfist.png",
        role: "Damage",
        difficulty: 3,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Recently freed from imprisonment, Doomfist is determined to plunge the world into a new conflict that he believes will make humanity stronger. Akande Ogundimu was born into a well-regarded Nigerian family, heir to its prosthetic-technology company. A highly intelligent and charismatic figure, Ogundimu helped to expand his family's business and position it for the future while dedicating his free time to his first love: competitive martial arts. He trained in traditional African fighting styles, including Dambe and Gidigbo, as well as in wrestling and other modern combat systems, incorporating the most effective techniques into his repertoire. Ogundimu competed in tournaments all over the continent, utilizing his intuition and ability to read opponents alongside his tremendous speed and strength. But when he lost his right arm in the aftermath of the Omnic Crisis, it seemed his martial arts career was finished before he had reached his prime. His company's cybernetic prosthetics allowed him to recover from his injuries, even making him stronger, but these enhancements rendered him ineligible for competition. He tried to devote himself to his business with the same zeal that he had for fighting, but he found nothing that could fill the void… until he was given a new opportunity by Akinjide Adeyemi, better known to the world as the second Doomfist, the Scourge of Numbani. Adeyemi offered Ogundimu the chance to fight with him as a mercenary. Initially wary, Ogundimu accepted, and discovered that he now had an arena in which he could unleash his enhanced capabilities. Eventually, Adeyemi brought him into the Talon organization. Talon's belief that humanity would be made stronger through conflict resonated with Ogundimu's personal experiences. Moreover, Talon's power struggles presented a new challenge that allowed him to use his talent in the boardroom along with his cunning as a combatant. Adeyemi was a useful asset to Talon, but the organization saw far greater potential in Ogundimu, with his intelligence and his ability to inspire as a commander. While Adeyemi was content to profit from raids on Numbani, Ogundimu had a grander vision. This difference in aspiration would lead Ogundimu to kill his teacher and take on the mantle of Doomfist, along with the eponymous gauntlet. As the new Doomfist, Ogundimu rose high in Talon and helped to orchestrate a conflict that the organization hoped would someday engulf the world. However, before their plan came to fruition, Ogundimu was defeated and captured by an Overwatch strike team that included Tracer, Winston, and Genji. He was imprisoned in a maximum-security facility for years, where he waited patiently for events he had incited to play out. Finally, he sensed that the time had come for him to return. He broke out of his prison and recovered Doomfist's gauntlet in a one-sided battle with Numbani's newly unveiled OR15 defense robots. Now, he has retaken his place in Talon's inner council, ready to spark a war that will consume the world once again.`
      },
      {
        id: 8,
        name: "Genji",
        imageUrl: "../../assets/hero-portraits/genji.png",
        role: "Damage",
        difficulty: 3,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `The cyborg Genji Shimada has made peace with the augmented body he once rejected, and in doing so, he has discovered a higher humanity. As the youngest son of the master of the Shimada ninja clan, Genji lived a life of luxury and privilege. He had little interest in the family's illegal businesses, and although he excelled at and enjoyed his ninja training, he spent most of his time pursuing a playboy lifestyle. Many within the clan considered the carefree Genji to be a dangerous liability, and they resented his father for coddling and protecting him. Following the clan leader's untimely death, Genji's older brother, Hanzo, demanded that Genji take a more active role in their late father's empire. Genji refused, enraging Hanzo. The tension between the brothers built to a violent confrontation that left Genji on the verge of dying. Hanzo believed that he had killed his brother, but Genji was rescued by Overwatch and the intervention of Dr. Angela Ziegler. The global security force saw Genji as a potential asset in its ongoing operations to combat the Shimada clan. As Genji's injuries left him clinging to life, Overwatch offered to rebuild his body in exchange for his help. He was put through an extensive process of cyberization, which enhanced his natural speed and agility and augmented his superlative ninja skills. Transformed into a living weapon, Genji single-mindedly set about the task of dismantling his family's criminal empire. But as time passed, Genji felt increasingly at war with himself. He was repulsed by the mechanical parts of his body and could not come to grips with what he had become. When his mission was complete, he abandoned Overwatch and wandered the world in search of meaning. He drifted for many years before crossing paths with the omnic monk Zenyatta. Though Genji initially rejected Zenyatta's wisdom, the benevolent omnic would not be deterred. In time, Zenyatta became his mentor, and under the monk's tutelage, Genji reconciled his dual existence as both man and machine. He learned to accept that although he had a cyborg body, his human soul was intact, and he came to see his new form as a gift and a unique strength. Now, for the first time in his life, Genji is free. Even he cannot say where his path will ultimately lead.`
      },
      {
        id: 9,
        name: "Hanzo",
        imageUrl: "../../assets/hero-portraits/hanzo.png",
        role: "Damage",
        difficulty: 3,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Mastering his skills as a bowman and an assassin, Hanzo Shimada strives to prove himself as a warrior without peer. The Shimada family was established centuries ago, a clan of assassins whose power grew over the years, enabling them to build a vast criminal empire that profited from lucrative trade in arms and illegal substances. As the eldest son of the family's head, Hanzo was bound by duty to succeed his father and rule the Shimada empire. From a young age, he was trained for that responsibility, displaying a natural aptitude for leadership and possessing an innate understanding of strategy and tactics. He also excelled in more practical areas: he was a prodigy in martial arts, swordplay, and bowmanship. Upon the death of his father, the clan elders instructed Hanzo to straighten out his wayward younger brother so that he, too, might help rule the Shimada empire. When his brother refused, Hanzo was forced to kill him. This act broke Hanzo's heart and drove him to reject his father's legacy, ultimately leading him to abandon the clan and all that he had worked so hard to attain. Now, Hanzo travels the world, perfecting his skills as a warrior, attempting to restore his honor and put the ghosts of his past to rest.`
      },
      {
        id: 10,
        name: "Junkrat",
        imageUrl: "../../assets/hero-portraits/junkrat.png",
        role: "Damage",
        difficulty: 2,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Junkrat is an explosives-obsessed freak who lives to cause chaos and destruction. The attack on the Australian omnium's fusion core forever altered the landscape of the Outback. After the detonation, the area was transformed into a harsh, irradiated wasteland, littered with debris and the twisted fragments of the ruined facility, and unlivable to most. But there were some who survived. Calling themselves the Junkers, they scavenged the husk of the omnium and formed a lawless, cutthroat society in its shadow. Junkrat was one of them, eking out a living reclaiming metal and components from the ruins. Like many others, he was affected by the lingering radiation. This touch of madness made him ideal for handling dangerous explosives, a love which he turned into an obsession. He came to notoriety when he discovered an extremely valuable secret in the bones of the omnium. Though few knew the nature of what he found, he was nonetheless pursued by bounty hunters, gangs, and opportunists wherever he went, until he made a deal with the Junker enforcer Roadhog, who grudgingly agreed to be his personal bodyguard in exchange for a fifty-fifty share of the spoils. Now, with Roadhog in tow, Junkrat has left the Outback, and embarked upon an international crime spree leaving nothing but havoc and bedlam in his wake.`
      },
      {
        id: 11,
        name: "Lúcio",
        imageUrl: "../../assets/hero-portraits/lucio.png",
        role: "Support",
        difficulty: 2,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Lúcio is an international celebrity who inspires social change through his music and actions. Lúcio Correia dos Santos grew up in Rio de Janeiro, in a poor and crowded favela that was hit hard by the financial upheaval following the Omnic Crisis. As Brazil began the long process of recovery, he wanted to find a way to lift the spirits of those around him. He found his answer in music and its power to bring people together and even help them forget their troubles, if only for a short time. He performed on street corners, in block parties, and as he got older, at a string of legendary underground shows. But Lúcio's close-knit community was thrown into chaos when the multinational Vishkar Corporation secured a contract to redevelop large tracts of the city. Lúcio and his neighbors had been told that the development would improve their lives. However, that promise never became a reality. Vishkar imposed controls on the residents in the name of building a more orderly society: enforcing curfews, cracking down on what the company perceived as lawless behavior, and exploiting the populace as a cheap labor force. Lúcio wouldn't stand for it. He stole Vishkar sonic technology that had been used to suppress the people, and he converted it into a tool to rally them to action. In a popular uprising, they drove Vishkar out of their neighborhoods. Lúcio's leadership made him a star overnight and a symbol for positive social change. His music skyrocketed in popularity. Whereas he had once performed locally, he was now filling arenas across the world. With his newfound fame, Lúcio realizes that he has an opportunity to make a difference and change the world for the better.`
      },
      {
        id: 12,
        name: "McCree",
        imageUrl: "../../assets/hero-portraits/mccree.png",
        role: "Damage",
        difficulty: 2,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Armed with his Peacekeeper revolver, the outlaw Jesse McCree doles out justice on his own terms. McCree had already made a name for himself as a member of the notorious Deadlock Gang, which trafficked in illicit weapons and military hardware throughout the American Southwest, when he and his associates were busted in an Overwatch sting operation. With his expert marksmanship and resourcefulness, he was given the choice between rotting in a maximum-security lockup and joining Blackwatch, Overwatch's covert ops division. He chose the latter. Although he was initially cynical, he came to believe that he could make amends for his past sins by righting the injustices of the world. McCree appreciated the flexibility afforded to the clandestine Blackwatch, unhindered by bureaucracy and red tape. But as Overwatch's influence waned, rogue elements within Blackwatch sought to bring down the organization and turn it to their own ends. Wanting no part of the infighting, McCree set off alone and went underground. He resurfaced several years later as a gunslinger for hire. But while McCree's talents are sought after by parties great and small, he fights only for causes he believes are just.`
      },
      {
        id: 13,
        name: "Mei",
        imageUrl: "../../assets/hero-portraits/mei.png",
        role: "Damage",
        difficulty: 3,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Mei is a scientist who has taken the fight to preserve the environment into her own hands. Though many blamed the planet's escalating, unexplained climate phenomena on the advent of new technologies, the rapidly growing omnic population, and drastically increased consumption of resources, the true cause remained unknown. To find a solution, Overwatch established a series of eco-Watchpoints at remote, critical locations worldwide. Mei-Ling Zhou was a member of this multiyear initiative. A peerless climatologist, she had introduced cutting-edge innovations in the field of climate manipulation that protected at-risk areas in Asia and beyond. She was assigned to the program's monitoring station at Watchpoint: Antarctica when disaster struck: a sudden, catastrophic polar storm battered the installation and cut it off from the outside world, leaving the facility damaged and the scientists stranded. As their supplies dwindled, they entered cryostasis in a last-ditch effort to survive until a rescue attempt could be made. But that rescue never came. It was years later when the team's cryogenics chamber was finally discovered. Mei, still in hibernation, was the only survivor. The world Mei awoke to had gone through considerable changes: Overwatch was no more, the serious climate issues had worsened, and none of the eco-Watchpoints were in operation. Any clues that they had uncovered were lost. Mei has decided to continue her work on her own. Equipped with a portable version of her climate-manipulation technology, she travels around the world, hoping to re-establish the eco-network and track down the causes of the threats to the planet's ecosystem.`
      },
      {
        id: 14,
        name: "Mercy",
        imageUrl: "../../assets/hero-portraits/mercy.png",
        role: "Support",
        difficulty: 1,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `A guardian angel to those who come under her care, Dr. Angela Ziegler is a peerless healer, a brilliant scientist, and a staunch advocate for peace. Ziegler rose to become the head of surgery at a prominent Swiss hospital before pioneering a breakthrough in the field of applied nanobiology that radically improved the treatment of life-threatening illnesses and injuries. It was this expertise that attracted the attention of Overwatch. Because her parents had been taken by war, Ziegler was opposed to the organization's militaristic approach to keeping global peace. Ultimately, she recognized that Overwatch offered her the opportunity to save lives on a much larger scale. As Overwatch's head of medical research, Angela sought to leverage her work for healing in frontline crises. The result was the Valkyrie swift-response suit, which Ziegler herself piloted on many Overwatch missions. Despite her contributions to Overwatch, she was often at odds with her superiors and the organization's overarching aims. When Overwatch dissolved, Ziegler dedicated herself to helping those affected by war. Though she spends most of her time caring for the broken and dispossessed in crisis areas around the world, Dr. Ziegler can be counted on to don her Valkyrie suit whenever innocents are imperiled.`
      },
      {
        id: 15,
        name: "Moira",
        imageUrl: "../../assets/hero-portraits/moira.png",
        role: "Support",
        difficulty: 2,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Equal parts brilliant and controversial, scientist Moira O'Deorain is on the cutting edge of genetic engineering, searching for a way to rewrite the fundamental building blocks of life. Over a decade ago, O'Deorain made waves when she published a controversial paper detailing a methodology for creating custom genetic programs that could alter DNA at a cellular level. It seemed like a promising step toward overcoming diseases and disorders and maximizing human potential. Dissent among her peers soon followed. Many considered her work to be dangerous because of its perceived ethical shortfalls, and O'Deorain was even accused of having the same unchecked desire for scientific advancement that some believed had caused the Omnic Crisis. In addition, other geneticists were unable to reproduce the results of Moira's research, which further called her discoveries into question. Instead of kickstarting her career, her paper seriously damaged her reputation. She received a lifeline in an offer from an unlikely source: Overwatch's covert ops division, Blackwatch. She continued her work in the shadows while developing new weapons and technologies for the organization. Her employment was a closely kept secret, until it was uncovered during inquiries following the Venice incident. Many high-ranking Overwatch officials disavowed all knowledge of her affiliation with them. After Overwatch was disbanded, O'Deorain was forced to turn to unconventional sources of funding. This time, she was invited to join the scientific collective that had founded the city of Oasis. Yet some have whispered that the shadowy Talon organization had already been supporting her for years, aiding her experiments in exchange for utilizing the results for their own purposes. Though O'Deorain will go to any lengths to make scientific breakthroughs, her work is still unknown to most of the world. But now that she has been freed from all constraints, it is only a matter of time before everything changes.`
      },
      {
        id: 16,
        name: "Orisa",
        imageUrl: "../../assets/hero-portraits/orisa.png",
        role: "Tank",
        difficulty: 2,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Built from parts of one of Numbani's short-lived OR15 defense robots, Orisa is the city's newest protector, though she still has much to learn. Originally put into service before the Omnic Crisis, the OR14 "Idina" line of security robots was built in Nigeria's massive manufacturing omnium. After the war, they were taken out of production, along with many of the other models used during the crisis. Twenty years later, Numbani revived and recommissioned the OR14 program to protect the city from external threats. These new OR15s were deployed for a short time before they were destroyed in an attack by Doomfist. Following the attack, the program was scrapped, and the civic government sold off the remaining OR15 inventory. Some parts were purchased by eleven-year-old Efi Oladele, a brilliant girl whose early accomplishments in robotics and artificial intelligence had already earned her the Adawe Foundation's "genius grant." With the approval of her understanding and open-minded parents, Efi spent the bulk of her grant money to acquire one of the decommissioned OR15 bots. She believed that Numbani needed a protector and that an upgraded OR15 could do just that. Efi repaired and reconfigured the robot and installed a personality core that she had designed herself. She named Numbani's newest hero Orisa. Orisa has shown that she can be of service to the city, but she is still working toward finding her optimal protocols. The omnic's inexperience can cause her to be an occasional liability. Fortunately, between Efi's willingness to make the necessary modifications and Orisa's adaptive artificial intelligence, both robot and creator have always been able to set things right. As Orisa starts her career as a guardian, she has much to learn about the world and her functionality. But as long as she is guided by Efi's boundless optimism and her own growing sense of honor and duty, Orisa stands ready to protect Numbani and her creator at any cost.`
      },
      {
        id: 17,
        name: "Pharah",
        imageUrl: "../../assets/hero-portraits/pharah.png",
        role: "Damage",
        difficulty: 1,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Fareeha Amari's commitment to duty runs in her blood. She comes from a long line of highly decorated soldiers and burns with the desire to serve with honor. As a child, Fareeha dreamed of following in her mother's footsteps and joining the global peacekeeping force, Overwatch. She enlisted in the Egyptian army, and her dogged persistence and tactical prowess caused her to rise up through the officer ranks. She was a courageous leader and earned the loyalty of all who served under her. With her exemplary record, Fareeha was well placed to join the ranks of Overwatch, but before she had that opportunity, Overwatch was disbanded. After leaving the army with a commendation for distinguished service, she was offered employment with Helix Security International, a private security firm contracted to defend the artificial intelligence research facility beneath the Giza Plateau. The top-secret facility was touted as vital to the safety of not only the region but countries across the globe. Fareeha gladly accepted the choice assignment and received training in the Raptora Mark VI, an experimental combat suit designed for rapid mobility and devastating firepower. Under the call sign "Pharah," she works to safeguard the AI installation. Though she mourns Overwatch's passing, she still dreams of fighting the good fight and making a difference on a global scale.`
      },
      {
        id: 18,
        name: "Reaper",
        imageUrl: "../../assets/hero-portraits/reaper.png",
        role: "Damage",
        difficulty: 1,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Some speak of a black-robed terrorist known only as the Reaper. His identity and motives are a mystery. What is known is that where he appears, death follows. The Reaper is an extremely volatile mercenary, a ruthless and remorseless killer responsible for terrorist attacks across the world. He has fought in many armed conflicts in the last decades, showing no loyalty to any cause or organization. Survivors have described a black shadow ghosting unscathed through the most hellish battlefields. The few bodies recovered of those he kills are pale, empty husks drained of life, their cells showing signs of intense degradation. It is possible that he is a byproduct of failed genetic alteration which forces his cells to simultaneously decay and regenerate at a hyper-accelerated rate. Those attempting to track his movements have begun to see a pattern in his appearances. They believe that Reaper is hunting former Overwatch agents and systematically eliminating them.`
      },
      {
        id: 19,
        name: "Reinhardt",
        imageUrl: "../../assets/hero-portraits/reinhardt.png",
        role: "Tank",
        difficulty: 1,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Reinhardt Wilhelm styles himself as a champion of a bygone age, who lives by the knightly codes of valor, justice, and courage. Over thirty years ago, Overwatch was founded to counter the threat of the robot uprisings around the world. Reinhardt, a highly decorated German soldier, was inducted as part of the original Overwatch strike team that put an end to the Omnic Crisis. After the conflict's resolution, Overwatch grew into a global institution, keeping the peace in a war-torn world. Reinhardt proved himself to be one of its most stalwart champions. Reinhardt's unique ethics and larger-than-life persona earned the admiration of his peers and superiors alike. Never afraid to speak his mind, he was Overwatch's most vocal supporter and, when necessary, its harshest critic, providing a constant reminder that Overwatch was meant to be a force for good. Having served into his late fifties, Reinhardt was faced with mandatory retirement from combat operations. Despondent about being removed from active duty, Reinhardt feared that his days of purpose and glory had ended. As times grew darker and Overwatch came under suspicion of corruption and sedition, Reinhardt could only watch as the cause he had dedicated his life to defending surrendered in disgrace. Though Overwatch was eventually disbanded, Reinhardt was not content to sit idly by while the world fell to disorder. Once again donning his Crusader armor, he has vowed to fight for justice across Europe like a knight of old, defending the innocent and winning hearts and minds with the promise of better days to come.`
      },
      {
        id: 20,
        name: "Roadhog",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        role: "Tank",
        difficulty: 1,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Roadhog is a ruthless killer with a well-earned reputation for cruelty and wanton destruction. After the Omnic Crisis, government officials gifted the Australian omnium and the surrounding area to the omnics that had nearly destroyed their country, hoping to establish a long-term peace accord. This arrangement permanently displaced Mako Rutledge and a large number of the Outback's residents, a scattered collection of survivalists, solar farmers, and people who just wanted to be left alone. Furious over the loss of their homes, Mako and others turned to violent rebellion. They formed the Australian Liberation Front and struck against the omnium and its robot population to take back the lands that had been stolen. Events continued to escalate until the rebels sabotaged the omnium's fusion core, resulting in an explosion that destroyed the facility, irradiated the region, and littered the Outback with twisted metal and wreckage for kilometers around. Mako watched as his home became an apocalyptic wasteland, and he was forever changed. Adapting to his environment, he donned a mask and took to the broken highways of the Outback on his ramshackle chopper. Little by little, his humanity was forgotten. The last vestiges of Mako faded away and the ruthless killer Roadhog was born.`
      },
      {
        id: 21,
        name: "Sigma",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        role: "Tank",
        difficulty: 3,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Brilliant astrophysicist Dr. Siebren de Kuiper's life changed forever when an experiment gone wrong gave him the ability to control gravity; now, Talon manipulates him to their own ends. De Kuiper was considered a pioneer in his field. His life's work involved devising a way to harness the power of gravity. Equally known for his groundbreaking research and eccentric personality, he conducted most of his studies from his lab in The Hague. Believing that he was close to achieving his goal, he performed his most important experiment on an international space station. But something went wrong, triggering the brief formation of a black hole. De Kuiper was only exposed to its power for a moment, but he suffered serious psychological damage. The area around him began to experience strange fluctuations in gravity, peaking and dropping in time with his reactions. He had to be evacuated immediately. Upon returning to Earth, De Kuiper was quarantined in a secret government facility. Between his ravings about the patterns of the universe, the psychic damage he sustained, and the gravitic anomalies happening around him, he was deemed unsafe and detained for years under the name "Subject Sigma." Isolated and unable to control his powers, De Kuiper retreated into his own mind. He thought he would never see the outside world again. When Talon discovered De Kuiper's existence, they infiltrated the facility and broke him out, planning to use his brilliance and research to further their plans. In their custody, De Kuiper slowly gained control of his powers. Now, gravity moved according to his will, and he was closer than ever to achieving his life's goal. But the same experiment that had opened his mind had also fractured it, and he struggled to keep the pieces together. De Kuiper continues to develop his powers in hopes of unlocking the secrets of the universe, unaware that Talon is using both him and his research.`
      },
      {
        id: 22,
        name: "Soldier: 76",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        role: "Damage",
        difficulty: 1,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Currently the target of an international manhunt, the vigilante known as Soldier: 76 wages a personal war to expose the truth behind Overwatch's collapse. Soldier: 76 revealed himself in a string of attacks that crisscrossed the globe, targeting financial institutions, shadowy corporations, and secure Overwatch facilities. Though to the outside world his motives are inscrutable, there are those who claim that he is a former Overwatch agent, determined to shed light on the conspiracy that brought down the organization. While his true identity remains a mystery, he is believed to have been trained as a member of the American "soldier enhancement program." He possesses physical capabilities exceeding those of a conventional soldier's, as well as other augmentations that make him a peerless combatant. In addition, he utilizes a cutting-edge arsenal, much of it stolen in raids on Overwatch installations. Unrelenting in his search to find those responsible for Overwatch's fall, Soldier: 76 will stop at nothing to bring them to justice.`
      },
      {
        id: 23,
        name: "Sombra",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        role: "Damage",
        difficulty: 3,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `One of the world's most notorious hackers, Sombra uses information to manipulate those in power. Long before she took up the alias "Sombra," ░░░░░░ was among the thousands of children who were left orphaned in the aftermath of the Omnic Crisis. With much of her country's infrastructure destroyed, she survived by utilizing her natural gifts with hacking and computers. After ░░░░░░ was taken in by Mexico's Los Muertos gang, she aided it in its self-styled revolution against the government. Los Muertos believed that the rebuilding of Mexico had primarily benefited the rich and the influential, leaving behind those who were most in need of assistance. Following her many conquests, ░░░░░░ was supremely confident in her skills, but she was caught unprepared when she stumbled into the web of a global conspiracy—one that had also noticed her. With her security irreparably compromised, ░░░░░░ was forced to delete all traces of her identity and went into hiding. She later reemerged as Sombra, upgraded and determined to find out the truth behind the conspiracy she had uncovered. Sombra launched an even more audacious string of hacks, and her exploits earned her no shortage of admirers, including Talon. She joined the organization's ranks and is believed to have contributed to its massive cyberattacks against corporations with strong ties to their governments. These efforts incited a popular revolution in Mexico against LumériCo and breached the security of Volskaya Industries, the manufacturing arm of Russia's anti-omnic defense. Now, with Talon's extensive resources to call upon, Sombra can focus on her true goal: to unravel the conspiracy and use the power behind it to her own ends.`
      },
      {
        id: 24,
        name: "Symmetra",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        role: "Damage",
        difficulty: 2,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Symmetra literally bends reality. By manipulating hard-light constructs, she crafts the world as she wishes it to be, in hopes of engineering a perfect society. Following the Omnic Crisis, the Vishkar Corporation of southern India began the laborious process of creating new, self-sustaining cities to house the nation's displaced population. One such city, Utopaea, was created using radical hard-light technology that enabled its architechs to shape the city's streets, utilities, and living spaces in the blink of an eye. After she was identified as one of the few capable of becoming a light-bending architech, young Satya Vaswani was plucked from extreme poverty and placed in the care of Vishkar's architech academy, never to return home. Isolated and lonely in her new life, Satya immersed herself in her education and training. She quickly grasped the applications of the technology and was one of the top students in her class. Satya approached hard-light manipulation differently than her peers, with their more procedural, mechanical constructions, instead weaving her constructs in the motions of the traditional dance of her homeland. Though she was one of Utopaea's top architechs, the Vishkar Corporation saw far greater potential in Satya's abilities. Giving her the moniker "Symmetra," Vishkar sent her on clandestine missions around the world to uphold its corporate interests and expand its influence into other countries. Symmetra believes her actions serve the greater good in society. But there are times when she wonders whether the control and order she desires are truly best for humanity.`
      },
      {
        id: 25,
        name: "Torbjörn",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        role: "Damage",
        difficulty: 2,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `At its height, Overwatch possessed one of the most advanced armaments on the planet, which could be traced to the workshop of an ingenious engineer named Torbjörn Lindholm. Before the Omnic Crisis, Torbjörn had gained notoriety for designing weapons systems used by countries around the world. However, his belief that technology must serve a better vision for humanity put him at odds with his employers, who desired to control his weapons using networked computer intelligence. Torbjörn had a deep mistrust of sentient robotic intelligence, and while many of his peers wrote this off as paranoia, his worst fears were realized when the robot populations of the world turned against their human creators during the Omnic Crisis. Because of his engineering genius, he was recruited to join the original Overwatch strike team, and his many inventions proved integral to ending the crisis. In the years that followed, Overwatch became an international peacekeeping force, and Torbjörn remained a critical resource for all of its technological needs and signature weapons systems. But in the aftermath of Overwatch's fall, many of Torbjörn's weapons were stolen or stashed away around the world. Feeling responsible for his creations, Torbjörn is determined to stop them from falling into the wrong hands and wreaking havoc on the innocent.`
      },
      {
        id: 26,
        name: "Tracer",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        role: "Damage",
        difficulty: 2,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `The former Overwatch agent known as Tracer is a time-jumping adventurer and an irrepressible force for good. Lena Oxton (call sign: "Tracer") was the youngest person ever inducted into Overwatch's experimental flight program. Known for her fearless piloting skills, she was handpicked to test the prototype of a teleporting fighter, the Slipstream. But during its first flight, the aircraft's teleportation matrix malfunctioned, and it disappeared. Lena was presumed dead. She reappeared months later, but her ordeal had greatly changed her: her molecules had been desynchronized from the flow of time. Suffering from "chronal disassociation," she was a living ghost, disappearing for hours and days at a time. Even for the brief moments she was present, she was unable to maintain physical form. Overwatch's doctors and scientists were stumped, and Tracer's case seemed hopeless until a scientist named Winston designed the chronal accelerator, a device capable of keeping Tracer anchored in the present. In addition, it gave Tracer the ability to control her own time, allowing her to speed it up and slow it down at will. With her newfound skills, she became one of Overwatch's most effective agents. Since Overwatch's dissolution, Tracer has continued to right wrongs and fight the good fight wherever the opportunity presents itself.`
      },
      {
        id: 27,
        name: "Widowmaker",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        role: "Damage",
        difficulty: 2,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Widowmaker is the perfect assassin: a patient, ruthlessly efficient killer who shows neither emotion nor remorse. It is believed that in her former life, Widowmaker was married to Gérard Lacroix, an Overwatch agent spearheading operations against the Talon terrorist organization. After several unsuccessful attempts to eliminate Gérard, Talon decided to change its focus to his wife, Amélie. Talon operatives kidnapped her and subjected her to an intense program of neural reconditioning. They broke her will, suppressed her personality, and reprogrammed her as a sleeper agent. She was eventually found by Overwatch agents, apparently none the worse for wear, and returned to her normal life. Two weeks later she killed Gérard in his sleep. Her mission complete, Amélie returned to Talon, and they completed the process of turning her into a living weapon. She was given extensive training in the covert arts, and then her physiology was altered, drastically slowing her heart, which turned her skin cold and blue and numbed her ability to experience human emotion. Amélie was gone. Now, Widowmaker is Talon's most effective assassin, feeling little save the satisfaction of a job well done.`
      },
      {
        id: 28,
        name: "Winston",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        role: "Tank",
        difficulty: 2,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `A super-intelligent, genetically engineered gorilla, Winston is a brilliant scientist and a champion for humanity's potential. The Horizon Lunar Colony was established as a first step for humanity's renewed exploration of space. Among its residents was a group of genetically enhanced gorillas that were intended to test the effects of prolonged habitation in space. One gorilla displayed such rapid brain development from the gene therapy that he was taken under the wing of Dr. Harold Winston, who taught him science and inspired him with tales of human ingenuity. The young gorilla passed his days assisting with the scientists' experiments, watching the distant blue world outside his habitat window, dreaming of the endless possibilities that awaited him there. But his life was thrown into chaos when the other gorillas led an uprising, killed the mission scientists, and claimed the colony for their own. Taking on the name of his beloved human caretaker, Winston built a makeshift rocket and escaped to Earth. There he found a new home with Overwatch, an organization that represented everything he had come to admire about humanity. Winston was finally able to live up to the heroic ideal that had been instilled in him. Now with the fall of Overwatch, Winston has gone into seclusion, once again cut off from the world he believes in, but longing for the days of heroism to return.`
      },
      {
        id: 29,
        name: "Wrecking Ball",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        role: "Tank",
        difficulty: 3,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `In one of the many experiments carried out at Horizon Lunar Colony, animals were given genetic therapy to assess their adaptation to extended periods of habitation on the moon. As an unexpected side effect, several of them exhibited exceptional growth in physical size and brain function. While most of the test subjects were gorillas or other primates, there were some exceptions, including a hamster named Hammond. Like the others, Hammond's intelligence grew, and he became more curious about the world around him. Much to the puzzlement and amusement of the scientists, Hammond would frequently escape into different parts of the moon base. Though they'd always find him and return him to his cell, they never figured out the true purpose behind his nightly escapades. What they didn't know was that Hammond was busy teaching himself the skills of a mechanic, which would soon come in handy. The colony was eventually thrown into chaos when some of the gorillas rose up against the human scientists and took control. Not all of the animals participated, however, and one of the gorillas, Winston, was making a plan to escape to earth. Hammond sensed his opportunity. He built a makeshift capsule and secretly hitched it to Winston's craft as the gorilla blasted off. As the two entered earth's atmosphere, Hammond broke off and landed in a different location: the wasteland of the Australian Outback. Hammond modified his escape pod to enter the lucrative mech battle arena of the Scrapyard. Working his way up the ranks, "Wrecking Ball" went from contender to champion, though the pilot's identity remained a mystery to all. Gathering his winnings, Hammond was able to upgrade his mech enough to survive the dangerous trek out of the Junker-controlled Outback. Now free to travel and do as he pleases, Hammond is exploring the world and finding new adventures along the way.`
      },
      {
        id: 30,
        name: "Zarya",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        role: "Tank",
        difficulty: 3,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Aleksandra Zaryanova is one of the world's strongest women, a celebrated athlete who sacrificed personal glory to protect her family, friends, and country in a time of war. Aleksandra was born in a remote Siberian village that was on the front lines of the Omnic Crisis, which began some thirty years ago. Although Russian forces defeated the robots and shut down their omnium, the region was devastated by the conflict. Only a child at the time, Aleksandra was surrounded by the post-war destruction, and as she grew older, she swore that she would gain the strength to help her people recover. Focusing on weightlifting and bodybuilding, Aleksandra was identified by the national athletics program as a potential star. She trained extensively, moving up the ranks while representing her country, and was expected to shatter longstanding records in the upcoming world championships. But on the eve of the tournament, an attack came from the long-dormant Siberian omnium, and her village was thrust into war once again. Aleksandra immediately withdrew from the competition and rushed home to enlist in the local defense forces, sacrificing the life of fame and fortune she might have had. Now she serves—a symbol to some, a stalwart fellow soldier to others. But for Aleksandra, it is a chance to use her great strength to protect the ones she loves.`
      },
      {
        id: 31,
        name: "Zenyatta",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        role: "Support",
        difficulty: 3,
        counters: [],
        counteredBy: [],
        abilities: [],
        story: `Zenyatta is an omnic monk who wanders the world in search of spiritual enlightenment. It is said that those who cross his path are never the same again. Years ago, following the Omnic Crisis, a group of outcast omnic robots experienced what they described as a spiritual awakening. They abandoned their preprogrammed lives to establish a communal monastery deep in the Himalayas. After many years of meditation on the nature of existence, they came to the belief that they were more than artificial intelligences and that, like humans, they possessed the essence of a soul. Recognizing the spiritual equality they held with humans, the monks, led by the enigmatic robot known as Tekhartha Mondatta, sought to heal the wounds caused by the Omnic Crisis a generation earlier and bring humans and robots back into societal harmony. Their message was embraced by millions around the world, and they became global celebrities. But one monk, Zenyatta, disagreed with this new direction. He believed that the way to repair the problems between humans and omnics was not through dogmatic teaching but through interpersonal connection and engagement. Ultimately, Zenyatta followed his own path. He chose to leave the monastery and wander the world, helping those he meets to overcome their personal struggles and find inner peace. But, when necessary, he will fight to protect the innocent, be they omnic or human.`
      }
    ]
  }
   maps: {
    id: 2,
    title: "Maps",
    routeName: "maps",
    items: [
      {
        id: 32,
        name: "Ayutthaya",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/ayutthaya.jpg",
        gameType: ["Capture The Flag"],
        subLocations: []
      },
            {
        id: 33,
        name: "Black Forest",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/black-forest.jpg",
        gameType: ["Elimination", "Team Deathmatch"],
        subLocations: []
      },
            {
        id: 34,
        name: "Blizzard World",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/blizzard-world.jpg",
        gameType: ["Assault/Escort"],
        subLocations: []
      },
            {
        id: 35,
        name: "Busan",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/busan.jpg",
        gameType: ["Control"],
        subLocations: [
            {
                id: 1,
                location: "Downtown",
                imageUrl: "https://www.pcgamesn.com/wp-content/uploads/2018/08/Overwatch-Busan-map.jpg"
            },
            {
                id: 2,
                location: "MEKA Base",
                imageUrl: "https://static.invenglobal.com/upload/image/2018/08/22/i1534936062240998.png"
            },
            {
                id: 3,
                location: "Sanctuary",
                imageUrl: "https://image.redbull.com/rbcom/052/2018-09-04/9c0385c1-fcf8-4f6f-ba8d-1ac4fdacfd15/0100/0/1/overwatch-new-map-busan-sanctuary.jpg"
            }
            
        ]
      },
            {
        id: 36,
        name: "Castillo",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/castillo.jpg",
        gameType: ["Elimination", "Team Deathmatch"],
        subLocations: []
      },
            {
        id: 37,
        name: "Château Guillard",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/chateau-guillard.jpg",
        gameType: ["Deathmatch", "Team Deathmatch"],
        subLocations: []
      },

      {
        id: 38,
        name: "Dorado",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/dorado.jpg",
        gameType: ["Deathmatch", "Escort", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 39,
        name: "EcoPoint: Antarctica",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/ecopoint-antarctica.jpg",
        gameType: ["Elimination", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 40,
        name: "Eichenwalde",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/eichenwalde.jpg",
        gameType: ["Deathmatch", "Assault/Escort", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 41,
        name: "Hanamura",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/hanamura.jpg",
        gameType: ["Assault"],
        subLocations: []
      },
      {
        id: 42,
        name: "Havana",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/havana.jpg",
        gameType: ["Escort"],
        subLocations: []
      },
      {
        id: 43,
        name: "Hollywood",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/hollywood.jpg",
        gameType: ["Assault/Escort", "Deathmatch", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 44,
        name: "Horizon Lunar Colony",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/horizon-lunar-colony.jpg",
        gameType: ["Assault"],
        subLocations: []
      },
      {
        id: 45,
        name: "Ilios",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/ilios.jpg",
        gameType: ["Control", "Capture The Flag"],
        subLocations: [
            {
                id: 1,
                location: "Lighthouse",
                imageUrl: "https://vignette.wikia.nocookie.net/overwatch/images/9/95/Ctfilios_lighthouse_8.png/revision/latest?cb=20170309011722"
            },
            {
                id: 2,
                location: "Ruins",
                imageUrl: "https://7crossroads.com/wp-content/uploads/2018/01/Ilios_controlpoint_ruins-1024x576.png"
            },
            {
                id: 3,
                location: "Well",
                imageUrl: "https://vignette.wikia.nocookie.net/overwatch/images/4/40/Ctfilios_well_7.png/revision/latest?cb=20170309012340"
            },
        ]
      },
      {
        id: 46,
        name: "Junkertown",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/junkertown.jpg",
        gameType: ["Escort"],
        subLocations: []
      },
      {
        id: 47,
        name: "King's Row",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/kings-row.jpg",
        gameType: ["Deathmatch", "Assault/Escort", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 48,
        name: "Lijiang Tower",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/lijiang-tower.jpg",
        gameType: ["Control", "Capture The Flag"],
        subLocations: [
            {
                id: 1,
                location: "Control Center",
                imageUrl: "https://vignette.wikia.nocookie.net/overwatch/images/6/6a/Lijiang_screenshot_24.jpg/revision/latest?cb=20160521224446"
            },
            {
                id: 2,
                location: "Garden",
                imageUrl: "https://vignette.wikia.nocookie.net/overwatch/images/9/94/Lijiang_screenshot_13.jpg/revision/latest?cb=20160521223155"
            },    
            {
                id: 3,
                location: "Night Market",
                imageUrl: "https://vignette.wikia.nocookie.net/overwatch/images/f/fe/Lijiang_screenshot_5.jpg/revision/latest?cb=20160521222223"
            },
        ]
      },
      {
        id: 49,
        name: "Necropolis",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/necropolis.jpg",
        gameType: ["Elimination", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 50,
        name: "Nepal",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/nepal.jpg",
        gameType: ["Control", "Capture The Flag"],
        subLocations: [
            {
                id: 1,
                location: "Sanctum",
                imageUrl: "https://vignette.wikia.nocookie.net/overwatch/images/6/60/Nepal_screenshot_27.png/revision/latest?cb=20160711234504"
            },
            {
                id: 2,
                location: "Shrine",
                imageUrl: "https://vignette.wikia.nocookie.net/overwatch/images/f/fe/Nepal_screenshot_17.png/revision/latest?cb=20160711233151"
            },
            {
                id: 3,
                location: "Village",
                imageUrl: "https://vignette.wikia.nocookie.net/overwatch/images/f/fb/Nepal_screenshot_5.png/revision/latest?cb=20160711231621"
            }
        ]
      },
      {
        id: 51,
        name: "Numbani",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/numbani.jpg",
        gameType: ["Assault/Escort"],
        subLocations: []
      },
      {
        id: 52,
        name: "Oasis",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/oasis.jpg",
        gameType: ["Escort"],
        subLocations: [
            {
                id: 1,
                location: "City Center",
                imageUrl: "https://vignette.wikia.nocookie.net/overwatch/images/b/bc/Oasis_screenshot_7.png/revision/latest?cb=20161201014156"
            },
            {
                id: 2,
                location: "Gardens",
                imageUrl: "https://vignette.wikia.nocookie.net/overwatch/images/3/3f/Oasis_screenshot_18.png/revision/latest?cb=20161201015827"
            },
            {
                id: 3,
                location: "University",
                imageUrl: "https://vignette.wikia.nocookie.net/overwatch/images/4/40/Oasis_screenshot_27.png/revision/latest?cb=20161201021159"
            }
        ]
      },
      {
        id: 53,
        name: "Paris",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/paris.jpg",
        gameType: ["Control"],
        subLocations: []
      },
      {
        id: 54,
        name: "Petra",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/petra.jpg",
        gameType: ["Deathmatch", "Team Deathmatch"],
        subLocations: []
      },
      {
        id: 55,
        name: "Rialto",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/rialto.jpg",
        gameType: ["Escort"],
        subLocations: []
      },
      {
         id: 56,
         name: "Route 66",
         imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/route-66.jpg",
         gameType: ["Escort"] ,
         subLocations: []
      },
      {
        id: 57,
        name: "Temple of Anubis",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/temple-of-anubis.jpg",
        gameType: ["Control"],
        subLocations: []
      },
      {
        id: 58,
        name: "Volskaya Industries",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/volskaya-industries.jpg",
        gameType: ["Control"],
        subLocations: []
      },
      {
        id: 59,
        name: "Watchpoint: Gibraltar",
        imageUrl: "https://static.playoverwatch.com/img/pages/maps/images/watchpoint-gibraltar.jpg",
        gameType: ["Escort"],
        subLocations: []
      },

    ]
  },
  roles {
    id: 3,
    title: "Roles",
    routeName: "roles",
    items: [
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
        heroes:["Ashe", "Bastion", "Doomfist", "Genji", "Hanzo", "Junkrat", "McCree", "Mei", "Pharah", "Reaper", "Soldier: 76", "Sombra", "Symmetra", "Torbjörn", "Tracer", "Widowmaker"]
      },
      {
        id: 62,
        name: "Support",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        heroes:["Ana", "Baptiste", "Brigitte", "Lúcio", "Mercy", "Moira", "Zenyatta"]
      }
    ]
  }
}

export default SHOP_DATA;
 
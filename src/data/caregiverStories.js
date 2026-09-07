// Structured caregiver story data — single source of truth for both the
// slider cards and the full-story modal on the Caregiver Stories page.
// Full story text is sourced from family-submitted interviews.

import portraitLinda from '../assets/images/caregiver_linda_wagner.png'
import portraitJane from '../assets/images/story-morning-light.jpg'
import portraitDarrell from '../assets/images/caregiver_darrell_simino.png'
import portraitEd from '../assets/images/story-lifelong-bond.jpg'
import portraitLindaSpotlight from '../assets/images/story-nostalgic-moments.jpg'

// Linda Wagner's story is featured twice (see the "Caregiver Spotlight"
// entry below) — the underlying text is identical in both places, kept
// here once so the two entries can never drift apart.
const lindaWagnerParagraphs = [
  "At 75 years old, Linda Wagner knows the quiet weight of loving someone through dementia — not once, but twice. This year, she said goodbye to her mother, Elizabeth, who passed away at 94 after a battle with dementia that began quietly in 2019. Before her diagnosis, Elizabeth had been the kind of woman who filled a room — independent, strong-willed, and deeply social, a former stay-at-home mother who later built a career as a secretary before retiring in her 60s to travel and enjoy the people she loved. The first signs were subtle: unexplained catalogue purchases, unusual spending. Then, in January 2021, the warning signs became undeniable when scammers Elizabeth called her \"Florida friends\" stole her identity, her passwords, and her social security information — the first of nine identity theft cases that would follow. Linda reached out to Elder Services of Worcester and later found a lifeline in the Alzheimer's Association, which offered reading materials, counseling, and caregiver resources. Elizabeth eventually moved into a nursing home, where she found moments of joy in Bingo nights, geography classes, and social hours — even as the disease slowly took more from her, until the day she no longer understood what the word \"daughter\" meant.",
  "Even as she grieved her mother, Linda has continued caring for her husband, Bruce, who is now living with pre-dementia. Their story began decades earlier as high school sweethearts at Shrewsbury High School, Class of 1969. Bruce went on to serve as a Junior Officer in communications during the Vietnam War, later spending seven months deployed during Operation Desert Storm — a career of service that left him with a lifelong love of WWII model collecting. After marrying, the couple traveled the world together before settling down in Shrewsbury to raise their son. Bruce's cognitive changes began emerging in 2018, alongside bouts of light-headedness and fainting, followed by a 2020 diagnosis of neurologic autonomic dysfunction in his feet. True to the quiet strength Linda has come to recognize in him, Bruce has often been reluctant to open up about what he's experiencing. Now, Linda drives everywhere the two of them need to go, while Bruce holds onto pieces of independence — making breakfast, setting alarms, caring for their cat. He visits Memory Cafes several times a month, volunteers at the local library, and stays engaged through senior volunteering, though evenings often bring more confusion and fatigue. Between video games, television, and his beloved model collection, Linda has watched socialization become one of his most powerful tools against isolation. Through the Veterans Administration, Bruce has access to lifelong Army Medicare and has completed a dementia education class, and despite the disease's progression, he remains able to communicate clearly with the people he loves. New treatments are within reach, but not without patience — the required MRI scans and evaluations can mean waiting up to four months.",
  "Through it all, Linda has become an advocate not just for her family, but for caregivers everywhere. She dreams of a support forum — online or in person — where caregivers could share their struggles without judgment, a resource she often wished existed during her hardest days. More than anything, she wants people to understand a simple truth: dementia is not the patient's fault. Even in moments of anger and exhaustion, Linda holds onto the belief that the person behind the disease deserves compassion, not blame or careless comments born from misunderstanding. Looking back, Linda feels a quiet pride — not in how easy the journey has been, but in her willingness to seek help when so many caregivers silently struggle alone. Her story is a testament to resilience: the kind that shows up not in grand gestures, but in the daily choice to keep loving, keep learning, and keep asking for support.",
]

export const CAREGIVER_STORIES = [
  {
    id: 'linda-wagner',
    name: 'Linda Wagner',
    relationship: 'Caring for her mother Elizabeth, and her husband Bruce, living with pre-dementia',
    quote: 'Dementia is not the patient’s fault — the person behind it still deserves compassion, not blame.',
    image: portraitLinda,
    modalTitle: 'Linda Wagner’s Journey as a Caregiver',
    paragraphs: lindaWagnerParagraphs,
  },
  {
    id: 'jane-barron',
    name: 'Jane Barron',
    relationship: 'Caring for her husband Rick, living with Mild Cognitive Impairment progressing toward Alzheimer’s',
    quote: 'It’s hard to measure how much socialization helps — but I believe deeply that it does.',
    image: portraitJane,
    modalTitle: 'Jane Barron’s Journey as a Caregiver',
    paragraphs: [
      "Six years ago, Jane began to notice something shifting in her husband Rick. A skilled carpenter and builder who had always had a sharp head for math, Rick started struggling with projects that once came naturally to him. The early signs led to a diagnosis of Mild Cognitive Impairment, made clearer when he began attending physician appointments alone — a small independence that soon gave way to more troubling changes. Delusions, daydreaming, and hallucinations followed, along with a phenomenon Jane came to recognize as doppelganger syndrome, in which Rick would become convinced that another version of her had gone somewhere else entirely.",
      "Today, Rick attends memory care daycare three to four days a week through MassHealth, and because of his tendency to wander unexpectedly, he requires close supervision. Yet within the boundaries of his condition, Jane and Rick still find moments of genuine connection. Music and concerts light him up, and he responds warmly to them, just as he does to his sisters — though connecting with his son, daughter, and grandchild has proven more difficult. Trips to the ocean remain a source of comfort, even as Rick drifts unpredictably into sleep throughout the day.",
      "Behind the scenes, Jane has become something of an expert navigator through the world of gerontology services, doing extensive research to find an outpatient doctor equipped to help. She turned to the Alzheimer's Association and Elder Services of Worcester, both of which connected her to invaluable resources. In pursuit of new possibilities, Rick enrolled in Eli Lilly's pharmaceutical drug trial for Donanemab — a rigorous process involving frequent examinations, MRIs, and infusions, which ultimately led to a significant improvement in his amyloid-beta levels. Socialization has become a cornerstone of their routine: Rick participates in three different Memory Cafes, where games like Scrabble offer both mental engagement and social contact. Jane admits it's hard to measure exactly how much benefit socialization brings to someone with Alzheimer's, but she believes deeply that it helps — not just for Rick, but for the caregivers who show up alongside him. For her own support, Jane has leaned on an online Behavioral Support Group for Caregivers and the Holden Senior Center Caregiver Support Group, while Rick's neurological care has moved to Community Westborough — physicians Jane considers herself fortunate to have found.",
      "Reflecting on her journey, Jane hopes others can come to understand just how complex and difficult the process of navigating MCI and Alzheimer's truly is. Her support groups have been a lifeline, offering not just resources but a sense of shared understanding with others walking similar paths. If she could change one thing, it would be the pace at which information reached her — she wishes doctors had been more direct and forthcoming earlier in Rick's diagnosis, rather than leaving her to piece things together on her own. And though the road has been hard, Jane finds an unexpected solace in knowing that others face even more difficult circumstances — a perspective that, however painful, makes the weight of caregiving a little easier to carry.",
    ],
  },
  {
    id: 'darrell-simino',
    name: 'Darrell Simino',
    relationship: 'Caring for his wife Elizabeth, living with Alzheimer’s disease',
    quote: 'It’s not a sacrifice — it’s devotion. You give up parts of yourself to give your full attention to the person you love.',
    image: portraitDarrell,
    modalTitle: 'Darrell Simino’s Story as a Caregiver',
    paragraphs: [
      "At 83 years old, Darrell Simino has spent the last several years embracing a role he never anticipated but has never resented: full-time caregiver to his wife of many years, Elizabeth, who is 84 and living with Alzheimer's disease. Before her diagnosis, Elizabeth was the picture of vitality — a former high school teacher who later became an analyst, known for her mild-mannered warmth and ready smile. She and Darrell were an active pair, biking, hiking, and traveling together well into their later years; as recently as 2025, the two drove all the way to Memphis and Nashua. Elizabeth was diagnosed with Mild Cognitive Impairment in 2012, a diagnosis that progressed to Alzheimer's disease in 2019. Short-term memory issues followed, and the signs became harder to ignore when Elizabeth began getting lost — including one moment that stayed with the family, when she forgot the way to her grandchild's school and had to ask another grandchild for help finding it.",
      "Elizabeth is now a participant in the Boston Center for Memory's Hope Study, a longitudinal research effort dedicated to understanding Alzheimer's disease and related dementias, undergoing regular examinations as part of the study. She has tried four different medications, though none have proven effective enough to significantly change her course. Darrell has brought in at-home caregivers to help share the load, though the shape of Elizabeth's days has changed considerably — she once walked the track at the YMCA and took part in a wellness class, but is no longer able to follow along the way she used to. Still, connection remains central to her life: she attends memory cafes eight times a month, is part of six different caregiver support groups, and is connected to both the Alzheimer's Family Support Center on Cape Cod and the Westborough Senior Center. Music, in particular, reaches her in a way that little else does. Elizabeth is now fully dependent on Darrell for her care, including feeding, as she no longer recognizes what she's eating — a stark contrast to the woman who biked and skied alongside her husband until just two years ago, in 2024.",
      "When asked about the difficulties of caregiving, Darrell doesn't describe it in terms of struggle. Instead, he speaks of extra work he's glad to take on, driven by love and a genuine desire to help Elizabeth. Their long-term care insurance through Genworth, paired with Medicaid, has provided crucial support — Darrell notes that Genworth in particular has communicated well and provided helpful resources throughout Elizabeth's care journey. The Boston Center for Memory has remained a steady source of support, even though, notably, Elizabeth's primary care physician has never once used the word \"Alzheimer's\" in discussing her condition. Twice a month, the Alzheimer's Family Support Center and Worcester Senior Center give Darrell the chance to talk with others who understand exactly what he's living through, while memory cafes continue to offer Elizabeth vital social interaction — something Darrell believes every caregiver should actively seek out for their loved ones. Elder Services in Massachusetts provided education on dementia and Alzheimer's disease, and the Worcester Senior Center supplied Darrell with a wealth of books to help him understand what lay ahead.",
      "Looking back on this chapter of his life, Darrell's message to other caregivers is simple and deeply personal: be willing to give up parts of yourself in order to give your full attention and care to the person you love. It is, in his experience, not a sacrifice made reluctantly, but one made out of devotion — a quiet, steady form of love that asks for everything and gives just as much in return.",
    ],
  },
  {
    id: 'ed-sweeten',
    name: 'Ed Sweeten',
    relationship: 'Caring for his late wife Joanne, who lived with dementia',
    quote: 'She cared for everybody, always tried to help everybody.',
    image: portraitEd,
    modalTitle: 'Ed Sweeten’s Journey with Joanne',
    paragraphs: [
      "At 86 years old, Ed carries the memory of a second marriage that gave him profound love and, eventually, profound loss. His wife Joanne, four years his senior, spent her career working in a bank and filled her personal life with a love of flowers and books. Those who knew her remember her most for her generosity of spirit — as Ed puts it, \"she cared for everybody, always tried to help everybody.\" That warmth defined Joanne long before dementia entered their lives, and it remained a thread of who she was even as the disease began to take hold.",
      "The first signs appeared in 2016 — small lapses, like forgetting directions to familiar places. Over time, the disease deepened its grip, eroding Joanne's short-term memory until she reached a point where she no longer recognized Ed as her husband. Her health challenges compounded the difficulty of her decline: Joanne underwent surgery to remove half of her colon and required daily insulin shots, adding layers of medical complexity to an already overwhelming situation. Through it all, one thing remained a constant source of connection between them — classical music, which continued to reach Joanne and bring the two of them together even as so much else began to fade. Eventually, Joanne was brought to a memory clinic and later moved to Christopher House, where she lived for a year and a half before she passed away.",
      "Looking back, Ed wishes he and Joanne had had access to dementia education classes early on — something to help them understand what was coming and prepare for the road ahead, rather than learning through trial and heartbreak. The toll of caregiving became impossible to ignore: Ed found himself neglecting his own medications, and his son lost 30 pounds under the strain of trying to help care for Joanne. It was only when Ed and his son recognized that neither of them could give Joanne the level of care she truly needed that they made the difficult decision to move her into Christopher House, a facility that ultimately offered the kind of dedicated, compassionate support their family could no longer provide alone.",
      "Ed's story is a reminder that caregiving often asks more of a family than they realize they can give — and that recognizing those limits, however painful, can be its own act of love. Christopher House became more than a facility for Joanne; it became a place where she was cared for with the same devotion she had shown others throughout her life, allowing Ed and his son the space to grieve, heal, and simply be her family again.",
    ],
  },
  {
    id: 'linda-wagner-spotlight',
    name: 'Linda Wagner',
    tag: 'Caregiver Spotlight',
    relationship: 'Twenty years of marriage, two dementia journeys — now an advocate for caregivers everywhere',
    quote: 'I dream of a place where caregivers can share their struggles without judgment.',
    image: portraitLindaSpotlight,
    modalTitle: 'Linda Wagner’s Journey as a Caregiver',
    // Same underlying story as the "linda-wagner" entry above, told from a
    // second angle in the slider — not a duplicate, a second telling.
    paragraphs: lindaWagnerParagraphs,
  },
]

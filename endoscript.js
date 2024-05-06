
class person {
    constructor(name,age,location,story,img,url) {
        this.name = name;
        this.age = age;
        this.location = location
        this.story = story;
        this.img = img;
        this.url = url;
    }
}
const createCards = () => {
    const stories = [
        {
            0 : new person (
                "Aubrion Rogers",
                "30",
                "Oklahoma, USA",
                "Aubrion Rogers took to social media to express her frustration that her condition was not being taken seriously. 'I have been in pain daily for months. Today I went to urgent care and asked for an ultrasound,' she said in a post online. 'Found out that I have three fibroids, one cyst, one enlarged ovary and one large mass that is 11cm. At what point will my situation be considered an emergency?' On 22nd January 2022 Rogers died in surgery from complications that arose when doctors were trying to remove her endometriosis. According to a Facebook post written by her husband, she was rushed into surgery after her right ovary burst. During surgery, doctors attempted to remove the ovary as well as her right fallopian tube, her appendix, endometriomas and endometriosis. She suffered a cardiac arrest and passed away while attempting to recover from the procedure. <br><br> How can a woman beg for medical help and be turned away, with fatal consequences? <br><br> Endometriosis is a whole-of-body disease in which tissue similar to that which usually lines the uterus grows in other areas of the body and causes pain, nerve damage and organ damage, among many other symptoms. It is often described as a chronic and non-life-threatening disease. But as Rogers’ story shows, endometriosis can certainly have fatal consequences if left untreated. <br><br> The disease itself isn’t technically fatal, explains Dr Mathew Leonardi, an advanced gynaecological surgeon and sonologist at McMaster University Medical Centre, but death can occur as a result of surgery complications or ovarian cancer – which new research shows endometriosis sufferers are at a higher risk of developing than the rest of the population.",
                "img/people/aubrionrogers.jpg",
                "https://www.refinery29.com/en-gb/2022/03/10904991/endometriosis-death-aubrion-rogers"
            ),
            1 : new person (
                "Holly Patel",
                "46",
                "Britain",
                "It was in 2015 that I first started to think there was something wrong. After I had my daughter, my husband and I tried to conceive again for a couple of years with no results, so we wondered if there were any underlying problems. We decided to make use of the private medical insurance I have through work to see a specialist. <br><br> My periods had been getting heavier and after having a scan at the Lister Hospital in London in 2017, I was diagnosed with fibroids, which were then removed through surgery. <br><br> My medical team also mentioned that I had a “tiny bit of endometriosis”: but at the time, I didn’t know what that was. <br><br> After surgery, we carried on trying for a baby, but my symptoms soon came back and I had further surgery. <br><br> Each month, my pain was getting worse and worse. I was under the care of the Spire Wellesley in Essex where I live, but then I was referred to another specialist on Harley Street and from there, I was referred to Mr Cutner at King Edward VII’s. <br><br> At my first scan in 2017, my endometriosis was only minor. But in 2019, now under the care of Mr Cutner, it had developed into a severe case, and had penetrated 5cm into my bowel. I was shocked at how quickly it had progressed, but it explained why my pain had become so severe. <br><br> I now know that with endometriosis, every case is different. Some do experience rapid development, whilst others will always live with a mild case.",
                "img/people/hollypatel.jpg",
                "https://www.kingedwardvii.co.uk/health-hub/patient-stories-living-with-endometriosis"
            ),
            2 : new person  (
                "Tegan",
                "28",
                "Australia",
                "For about 14 years, I've been feeling this way, having the same symptoms every single month. When I was younger, the doctors would kind of say, it's normal, and when you're so young, and you're so fragile-looking as well, because I was such a petite person, Mum always said, they just thought I had no pain threshold, even though Mum thought my pain threshold was through the roof. <br><br> So it wasn't 'til I was about 27 that I mentioned it to a doctor and they said, oh well let's just try one more painkiller, and then we'll go from there. I also had two ultrasounds to see if I had cysts, because my mum has polycystic ovaries, so I had two ultrasounds in two years before I got the referral to go and see a gynaecologist suspecting of endometriosis. <br><br> Two years ago, it started to affect my work, so at lunch time, because I would be holding the pain in the best I could, and while I was feeling lightheaded and just really struggling with the pain, I would get through the morning session of teaching, and then at lunch time I would walk into my communal kind of staffroom. We have PLT rooms, so it's just the people in our year level that's sitting there, and I would lie on the floor with a heat pack, have my pain killers, and I would just curl up and I would sit there and I wouldn't always cry because sometimes when you're in so much pain you can't cry. And then there was one day which was probably the worst day ever, as soon as that lunch bell rang, and my kids were out of the classroom I burst out into tears and I went straight over to the office and I said, 'I can barely walk, I am in severe pain.' And they got me to sit down in the office and they were all looking at me like I was dying basically. They hadn't seen it that bad before. And we actually had to call my mum to come and get me, because my legs were shaking so much from pain that I could not drive, could not walk. <br><br> So then I, you know, went and saw the gynaecologist and I gave her all my symptoms, and she said she would be more stunned if when they did laparoscopy they didn't find endometriosis. So, then she booked me in for my surgery only a couple weeks later and I remember lying on the... on the bed, they were about to wheel me in for my surgery and I started crying and I thought it was because I don't like needles and I don't like things like that. But when I really thought about it deeper, I was crying because I was so scared they weren't going to find anything and there'd be no reason whatsoever for me to be in that much amount of pain and maybe I'm not as tough as I think I am when it comes to pain, and I was second guessing myself that whole time that I was lying there. And then my gynaecologist came in and she said to me, it was really bad, it was everywhere.",
                "img/people/tegan.png",
                "https://www.jeanhailes.org.au/endowise/tegans-endometriosis-story"
            ),
            3 : new person   (
                "Patricia Hackshaw",
                "37",
                "Florida, USA",
                "In part one of my endo story, I was six surgeries in and finally making peace with having endometriosis. I wanted to raise awareness by telling my story to help others with the same condition. After my sixth surgery, I thought things would be better. They weren’t. <br><br> A few months later, I started having horrible cramps, but only on the right side, and with that came severe right leg pain. I’d had pain in my leg before, but never like this. I returned to the hospital, and after multiple tests, the doctor said I had a huge cyst on my right ovary growing where I’d just had my surgery. We decided not to remove it but to monitor it, along with the pain. <br><br> A few months after that, I woke up one morning to my body feeling weird. I had weakness on the right side and didn’t know why. However, I still went to work and tried to push through. The next day, the weakness worsened. I called my doctor, who told me to go to the hospital. When I got there, I couldn't lift my right arm and could barely walk. Doctors thought I was having a stroke, and I didn’t disagree. My grandma had died a year prior from a stroke, and I was scared. After several exams, doctors determined it wasn’t a stroke but didn’t know what it was. They kept me in the hospital for a week for observation and to begin physical therapy. <br><br> During the following weeks, I did physical therapy and saw multiple neurologists but still couldn’t find answers. It wasn’t until I was at physical therapy one day when the doctor mentioned an article he’d read about a woman in my situation, meaning it was related to endometriosis.",
                "img/people/Patricia-Hackshaw.jpg",
                "https://www.endofound.org/after-eight-endometriosis-surgeries-im-focusing-on-my-happiness-patricia-hackshaws-endo-story"
            ),
            4 : new person (
                "Trenasia Brownfield",
                "29",
                "Pennsylvania, USA",
                "Trenasia Brownfield, her husband, and two children are about to be evicted from their home in Nanticoke, Pennsylvania, southwest of Scranton. This comes just weeks after Brownfield had endometriosis surgery. Her family’s financial struggles are due primarily to the disease that has wreaked havoc on her body for the last decade—but she hasn’t lost hope. <br><br> Brownfield had heavy and painful periods beginning at 14, something her family didn’t discuss with her and that she assumed was normal. When she became pregnant at 19, she suffered from severe abdominal pain. A scan showed it was the result of hydronephrosis (swelling of the kidney) and ovarian cysts. <br><br> After giving birth, the pain continued as the cysts grew and eventually ruptured. Brownfield also started experiencing chronic and debilitating migraines. <br><br> The migraines would continue every day for the next five years. Brownfield was forced to quit school and work. After having her second child at age 24 and with the symptoms persisting, Brownfield began researching women’s health. <br><br> She tried for the next few years to convince doctors that she had the disease. Not until December 2022, when the pain was so unbearable that it hurt to walk or even lie down, did they listen. A scan revealed a cyst that was causing kidney blockage. Brownfield also had an ovarian torsion. Doctors placed two stents in her ureter last year and did endometriosis surgery four weeks ago that included removing an ovary and fallopian tube.",
                "img/people/brownfield.jpg",
                "https://www.endofound.org/facing-eviction-weeks-after-surgery-endometriosis-patient-forges-ahead-with-gratitude-and-positivity"
            ),
            5 : new person (
                "Mikka C. Branch",
                "35",
                "Massachusetts, USA",
                "I had unexplainable symptoms for two decades, including pelvic and abdominal pain, painful and heavy periods, and painful ovulation. In February 2020, my pelvic pain was so drastic that I went to the ER multiple times and had several ultrasounds, blood tests, and CT scans that revealed nothing. After a few more weeks, when the pain had completely incapacitated me, my gynecologist offered to do an exploratory laparoscopy. She took several biopsies of presumed endometriosis—a disease I’d never heard of despite being a nurse myself for eight years. She also did a D&C and found a hemorrhagic cyst on one of my ovaries that ruptured when she began the surgery. When I woke up from surgery in even more pain, the doctor claimed I was too dramatic and even accused me of being a drug seeker. This is a glimpse into the medical trauma and gaslighting I endured. <br><br> As the pain continued, and after the pathology report confirmed I had endometriosis, I found an endometriosis specialist in Boston, who did my second surgery in May 2020. The specialist excised endometriosis from several areas of my pelvis, but the pain persisted to the extent that I could not do my job as a nurse and had to go on short-term disability. Though just 31 years old, I was soon put into medically induced menopause, which did nothing to help. I continued to seek solutions for the pain through numerous ER visits, ultrasounds, CT scans, and IV fluids. Every medical provider I encountered insisted nothing was wrong and, again, that I was being dramatic and seeking drugs. This treatment caused me to develop PTSD, which I still struggle with today.",
                "img/people/mikka.jpg",
                "https://www.endofound.org/from-medical-trauma-to-hope-and-healing-mikka-c.-branchs-endo-story"
            ),
            6 : new person (
                "Nicole Ferrer",
                "25",
                "New Jersey, USA",
                "Nicole Ferrer, from Union County, New Jersey, began experiencing symptoms with her first period at 13. <br><br> 'I spent the next decade of my life just handling it,' she said. 'Even though I’d miss school and other events, people kept saying it was normal.' <br><br> In December 2022, the pain heightened to an unprecedented level. Ferrer tolerated it for the next month. <br><br> 'In January 2023, I was at work and having my period and almost fainted because of the pain,' she said. 'When I went to the emergency room, they ran labs and determined nothing was wrong.' <br><br> In March, Ferrer felt a sharp stabbing pain on her right side near her stomach, worse than what she’d felt two months earlier. The pain intensified through the spring and summer, causing her to miss a lot of work. Ferrer went to numerous doctors who couldn’t diagnose her. They never mentioned endometriosis. <br><br> 'I went to GI doctors, went on different types of birth control, did acupuncture, and tried prescribed and over-the-counter medications,' Ferrer said. 'I even tried SSRIs (selective serotonin reuptake inhibitors, a type of antidepressant) because some people said I had anxiety.' <br><br> In July, her Facebook friend posted her own endometriosis story. <br><br> 'I told her this might be going on with me and asked if she could share more information,' Ferrer said. 'She taught me the ropes of what was going on and explained things that medical professionals never mentioned when I presented them with my symptoms.' <br><br> In October, Ferrer went to her friend’s doctor, an endometriosis specialist, for surgery. He found a severe case of endometriosis around Ferrer’s bowels, bladder, and right ureter. She’s been recovering since.",
                "img/people/nicole_ferrer.jpg",
                "https://www.endofound.org/25-year-old-woman-is-led-to-endometriosis-diagnosis-after-reading-middle-school-friends-story-on-fac"
            ), 
            7 : new person (
                "Milcah Macatiag",
                "67",
                "California, USA",
                "For fifteen years, I endured this pain that affected every aspect of my life. It led me to seek surgical intervention despite the hesitation of my consulting OB-GYN. Unfortunately, the aftermath of the surgery left me with more questions and pain than answers. The diagnosis of endometriosis, with a suggested solution of a hysterectomy, was devastating news at the age of 26. The journey for relief led me to experiment with birth control pills, which only compounded my suffering. The lack of information and understanding about endometriosis at the time left me feeling even more isolated in my struggle. Because of a lack of treatments, I learned to anticipate the pain, relying on over-the-counter medications that provided minimal relief. <br><br> In 2018, my health took a significant turn for the worse. Alongside the chronic pain, I began experiencing fatigue and severe breathing difficulties. A CT scan revealed that 80 percent of my right lung had collapsed, necessitating emergency medical intervention. Although VAT surgery was suggested, I sought alternative opinions, leading me to two endometriosis specialists, whose interventions finally offered me relief and hope. <br><br> Today, my mission extends beyond my personal battle with endometriosis. I am a school board member and serve as our community’s events planner for fundraising initiatives. My passion for service and my entrepreneurial spirit led me to launch a non-emergency transport business during the COVID-19 pandemic. And, most recently, I became an endometriosis educator.",
                "img/people/Milcah.jpg",
                "https://www.endofound.org/endometriosis-chronicles-from-patient-to-advocate-my-journey-of-empowerment-milcah-macatiags-endo-st"
            ),
            8 : new person (
                "Jamie Smith",
                "39",
                "Illinois, USA",
                "I had my first female health experience at 17. I sat in an OBGYN waiting room due to the pain and severe bleeding I had each month during my period. My OBGYN’s solution? A hormone birth control shot called Depo-Provera. It caused spotting for 90 consecutive days. I’d become a teenager in hormonal hell, and my twenties would be no different. I spent most of that decade trying to control my heavy bleeding and pain, which I managed with birth control pills. <br><br> At 28, when my husband and I wanted to start a family, my body was a mess from a decade of hormones. With doctors telling me nothing was wrong and to 'just give it time,' I turned to alternative medicine. After a few months of acupuncture and a bit of universe magic, our daughter was naturally conceived and healthily delivered. <br><br> When she was almost two, we were ready to expand our family, but months of trying to conceive turned into a year with no luck. My OBGYN prescribed Clomid, which is used to treat irregular or absent ovulation, but after another year, nothing had changed. This was when I began searching for the best reproductive endocrinologist I could find. It was the start of an eight-year journey.",
                "img/people/jamie_smith.jpg",
                "https://www.endofound.org/the-cost-of-loss-one-womans-healthcare-tragedy-jamie-smiths-endo-story"
            ),
            9 : new person (
                "Bindi Irwin",
                "25",
                "Australia",
                "Renowned conservationist and Australian television personality Bindi Irwin recently underwent surgery in New York City at the Seckin Endometriosis Center in Lenox Hill Hospital. She is the daughter of the late Steve Irwin, best known for his highly acclaimed television series The Crocodile Hunter. <br><br> Irwin shared details and photos on social media today of her decade-long battle with endometriosis. Dr. Tamer Seckin, the founder of the center, removed 37 lesions from Irwin during a surgery that took several hours. Irwin said she decided to share her story publicly with the hope of helping other women who are suffering.",
                "img/people/bindi.jpg",
                "https://www.endofound.org/bindi-irwin-recovering-well-following-surgery-at-seckin-endometriosis-center"
            ),

            10 : new person (
                "Molly Gun",
                "21",
                "USA",
                "I was perpetually on edge. After a few [painful] incidents, cautious became my normal state. A stark difference from the innocent, unbothered lives my close friends were leading and that I, too, once enjoyed. It felt as if I’d suddenly been catapulted into a new state of being where I had to cope with being strikingly (to myself, at least) different from other kids my age and not knowing why. I worried how I would wake up feeling and if I’d be able to make it through the day, when my biggest concern should have been who I was going to sit with at lunch or if I bombed my algebra test. <br><br> My heart still breaks when I think about my younger self and the torture she had to endure: a body at war, constant uncertainty, and all without knowing what was wrong or how to mitigate even a tiny fraction of the inexplicable pain she was in. My age inhibited me from asserting myself the way I wished I could have and served as a major roadblock in properly conveying to medical professionals that I was not okay. I was just a kid. <br><br> Now I’m twenty-one, and I know better the ins and outs of my diagnosis. Even on days when I am not in control, I have strategies to keep everything in check. Where I go, my pain management toolbox goes. Things are starting to improve for me, even albeit slowly. Still, despite appearing just like everyone else, I lead a vastly different life than most of my peers. It’s okay. It’s life. But I’ve found that I need to allow myself outlets to acknowledge the truth with no frills or feigned positivity. It sucks sometimes. I’ve had a surplus of time to reflect on my situation and to start making sense of everything that’s happened, particularly in the past year. My highs are really high. When I feel okay, I feel incredible. The easy days are not lost on me, and I rejoice in my good health. I have to, since they pack a lot of meaning for me. The good stretches are becoming longer, and the bad days are growing shorter. For every side effect of my condition, a doctor or specialist is ready to help me conquer it. The truth is I really do love the life I’ve created for myself, particularly when I’m in a good spot to fully immerse myself in it. It’s up to me to make the good days just as good as the bad days are bad. Better, even.",
                "img/people/molly_gunn.jpg",
                "https://www.endofound.org/my-endometriosis-story-molly-guns-endo-story"
            ),
    
            11 : new person (
                "Rachel Bernhard",
                "27",
                "Tennessee, USA",
                "My endometriosis journey began in 2017 when I started feeling sick with hot flashes, bloating, anxiety, nausea, and redness in my face. Fatigue, muscle aches, and severe headaches were the most debilitating symptoms. The muscle aches were from my arms to my ankles. The fatigue made it impossible to do anything day to day. And no over-the-counter medicine could tame the migraines. <br><br> I went from doctor to doctor—a rheumatologist, gynecologist, neurologist, and internist. They prescribed painkillers, antidepressants, and anxiety medication. Some outright dismissed my claims. One diagnosed me with fibromyalgia, which I didn’t have. Another thought it might be lupus, which it wasn’t. <br><br> I suffered for five years without answers until I went to a naturopathic physician, who told me my hormones were imbalanced. I researched ways to balance them through lifestyle changes, the foods I ate, and eliminating toxins. I also joined a health coaching program, where the CEO suggested I could have endometriosis. I’d heard of the disease but didn’t know what it was. When my husband and I researched it, one of the primary symptoms was painful or heavy periods. I didn’t have those. <br><br> I felt pain when running, horseback riding, and during ovulation. When I was in high school a decade earlier, I sometimes had to go home midday because my periods were painful, something I thought was normal for every girl. And though I didn’t have heavy or painful periods after high school, that’s probably because I was on hormonal birth control that was masking the symptoms. I had no idea what was going on inside me. <br><br> I asked the CEO for a list of the best specialists in the country who did excision surgery. She recommended one in Los Angeles, where I happened to be going soon for vacation. When I saw that doctor in the spring of 2022, everything unfolded and began to make sense. She determined that I’d need surgery, and we scheduled it for the fall. <br><br> I had excision surgery last August. The endometriosis was in several places, including my cervix and rectum. I’m most grateful that she could preserve my fertility so that I could try to have children one day. The only negative was that the recovery period was rough. I felt pain and fatigue for several months, but I think part of the problem was that I was on a muscle relaxer with too many side effects. Once I got off that, I recovered more quickly. By January, I felt so much better, and I feel today like I’ve finally reclaimed my life.",
                "img/people/Rachel-Bernhard.jpg",
                "https://www.endofound.org/when-a-painful-period-isnt-a-primary-symptom-rachel-bernhards-endo-story"
            ),
    
            12 : new person (
                "Coralyn Loomis",
                "37",
                "New York, USA",
                "The first symptom that hit me the hardest was fatigue. I was always tired and assumed it was due to being a mom and commuting to work over an hour away. But at 27 years old, I felt like I should have had more energy. I went to my general practitioner, who conducted several tests. When they all came back negative, she assumed I was depressed and wrote me a prescription for Wellbutrin. After taking it for a few months, I could add neurological side effects to my fatigue. I stopped the meds and continued struggling with the fatigue without knowing the cause. <br><br> Fast-forward two years. I had been struggling to lose weight and was hitting the gym regularly, trying to shrink my stomach that always appeared to be in the second trimester. One day, while doing ab exercises, I felt a strange sensation and cut my workout short. Later that night, my stomach felt like it was on fire. I thought maybe I’d done too many crunches, but then a fever developed. I went to an urgent care center, and a urine test revealed an excessive protein. They sent me to the ER, where the doctor performed a CT scan and pelvic ultrasound. After reviewing the results, he returned to my room with a look of grave concern. <br><br> He called my gynecologist to see if I needed emergency surgery. My gynecologist recommended instead that I see her. I left the ER with some pain meds and a follow-up referral. This would begin the next eight years of my endometriosis journey.",
                "img/people/coralyn_loomis.png",
                "https://www.endofound.org/my-endometriosis-journey-overcoming-stage-iv-endo-coralyn-loomiss-endo-story"
            ),
    
            13 : new person (
                "Simran Datta",
                "21",
                "New York, USA",
                "Datta got her first period when she was 11, and the pain and excessive bleeding were evident from the start. She doesn’t have horror stories of being repeatedly misdiagnosed, as many women with endometriosis do, because she didn’t see a gynecologist for several years. <br><br> 'Painful periods were viewed as a common phenomenon in my household,' Datta said. 'My mom had painful periods, and I feel that culturally, painful periods are widely accepted among South Asian women.' <br><br> Datta fought through the symptoms alone in middle and high school until the pain reached a breaking point in the spring of 2022 during her sophomore year of college. That’s also when she was finally diagnosed. <br><br> 'I was taking a nap in my dorm and woke up in the most excruciating pain,' Datta said. 'An ambulance rushed me to the hospital, and they found a 10-centimeter endometrioma on my right ovary. When they did an ovarian cystectomy, they found endometriosis everywhere—the ovaries, around the uterus, the cul-de-sac, the rectum.' <br><br> After her recovery, Datta wasted no time founding Hysteria last summer, a nonprofit at Barnard that provides a weekly support group and wellness programs for those with menses-related disorders. The group welcomes guest speakers on managing pain and shares educational and medical resources. Datta said Barnard is unique because it provides academic and living accommodations for women with painful periods through its Center for Accessibility Resources & Disability Services. But as much as Datta appreciates and utilizes CARDS, it focuses more on physical than social or mental health. That prompted her to start Hysteria to complement it.",
                "img/people/Simran-Datta.jpg",
                "https://www.endofound.org/21-year-old-ivy-league-student-with-stage-iv-endometriosis-is-epitome-of-resilience-simran-dattas-en"
            ),
    
            14 : new person (
                "Gail Albritton",
                "76",
                "Arkansas, USA",
                "Gail Albritton of El Dorado, Arkansas, began feeling significant pain during her periods as a teenager 60 years ago. With endometriosis awareness nearly nonexistent, she continued to suffer from the symptom every month for more than three decades until she had a hysterectomy in October 1998 at the age of 51. <br><br> 'In high school, there was no point in me even going to school on the first couple days of my period. I’d stay in bed,' said Albritton, now 76. 'My momma said the pain was part of life, part of being a woman, and I just had to endure it. That’s what they believed during her time.' <br><br> It was the only symptom of the disease she ever had, but it was enough for her to get the hysterectomy once she knew she didn’t want more children. After the surgery, her doctor gave her some startling news. <br><br> 'He said, ‘Did you know that you have endometriosis really, really bad?’' she said. Albritton didn’t know what that was until he explained it. <br><br> 'I said, 'No wonder I’ve been in so much pain all these years,' she recalled. <br><br> But the surgeon, Albritton said, didn’t remove the endometriosis or recommend that she have it removed. Albritton had no knowledge of the disease to know any better, and she assumes today that her surgeon may have thought the hysterectomy would eliminate her pain. He also prescribed her estrogen as hormonal replacement therapy when she was discharged, but prescribing estrogen alone without progesterone after a hysterectomy can aggravate endometriosis symptoms. <br><br> Albritton said that’s what happened to her. Just months later, in early 1999, the pain returned with the same vengeance as before her surgery.",
                "img/people/gail.jpg",
                "https://www.endofound.org/nearly-thirty-years-after-having-a-hysterectomy-septuagenarian-is-sharing-her-endometriosis-story-ga"
            ),
    
            15 : new person (
                "Jennifer Hoffmann",
                "38",
                "Ohio, USA",
                "I knew growing up that I had been considered a miracle baby. My parents tried to have children for many years unsuccessfully. They also tried adoption unsuccessfully. Due to a job change, they relocated to Columbus, Ohio, where The Ohio State University was doing early ground-breaking work on in vitro fertilization. My mom was one of the courageous women from the region to try the new treatment, and despite having to navigate hemorrhage during her pregnancy, it was successful. I was the first baby both conceived and delivered at Ohio State, a story that has had a lasting impact on my life. Pioneering efforts in fertility science are why I’m here and what sparked my interest in medical innovation. This translated into me earning a Ph.D. in Bioengineering so that I, too, could work on life-changing healthcare technologies. <br><br> Giving birth to your first baby should be one of the best life experiences, but mine was the opposite. After a 24-hour delivery, I experienced pain that was ten times worse than during labor. The doctor had gone home, so I explained to the nurse that I was experiencing pain and something felt wrong. I had everything going for me in the situation: I was educated in medical terminology, comfortable speaking with physicians and nurses due to my career in medical devices, and could logically explain that despite my high pain tolerance, this was far worse than anything I had ever experienced. <br><br> The nurse’s response? <br><br> 'You’re a new mom and don’t know what pain is like.' <br><br> I was told to take ibuprofen and rest. <br><br> Two hours later, I was in such extreme pain that I cried out like an animal. I called my mom, and she immediately knew something was wrong. She rushed to the hospital and got the circulating nurse to call the physician back. When the physician returned, she realized I had experienced postpartum hemorrhage. She began using her arm, all the way past her elbow, to remove clotted blood from my uterus and pieces of placenta that had remained. I lost 2.2 liters of blood in the process, a significant portion of my total blood volume. I eventually lost consciousness and required blood transfusions. <br><br> While I survived the delivery, I had to return for surgery again eleven weeks postpartum to remove more placenta. Since I was trained in medical science, I researched articles to understand why I might have had placenta stuck throughout multiple procedures. I was told it just happened and could happen again.",
                "img/people/jennifer_hoffman.jpg",
                "https://www.endofound.org/a-miracle-baby-develops-adenomyosis-jennifer-hoffmanns-quest-for-strength-and-peace"
            ),
    
            16 : new person (
                "Jeanne St. Claire",
                "41",
                "New York, USA",
                "Until a near-fatal night in 2018, at the age of 35, St. Claire had never had any symptoms. <br><br> 'I fainted around midnight and woke up on the bathroom floor with bad stomach pains,' St. Claire said. 'I wasn’t better in the morning and couldn’t get it out of my head that I’d fainted. That’s what made me go to the hospital.' <br><br> She got to the ER at about noon and was there for 12 hours. Doctors ran several tests and diagnosed her with irritable bowel syndrome. But when the on-call gynecologist saw the images around midnight, he immediately knew St. Claire’s condition wasn’t IBS. <br><br> 'He determined that an ovarian cyst had ruptured, and I’d been bleeding internally all that time,' St. Claire said. 'The staff rushed into my room and told me I had to have surgery now.' <br><br> The doctor stopped the bleeding and removed a significant amount of endometriosis and scar tissue that he’d found on and around the ovary. St. Claire had lost so much blood that she had to have a transfusion and remained in the hospital for a few days to heal. <br><br> 'That doctor saved my life,' she said. 'Nobody knew that I was bleeding internally until he saw it, which was about 24 hours after the cyst had ruptured.' <br><br> St. Claire was also fortunate that the surgeon had the experience to identify and remove the endometriosis. But this is where her story took an odd twist.",
                "img/people/Jeanne-St.-Clair.jpg",
                "https://www.endofound.org/jeanne-st.-claire-shares-her-endometriosis-story-weeks-after-surgery-and-five-years-after-it-nearly-"
            ),
    
            17 : new person (
                "Anjali Soi",
                "30s",
                "India",
                "I recently had my left ovary and fallopian tube removed via laparoscopy. They were frozen to the left of my pelvis and my gynecologist removed them along with the endometrial growths in my pelvic area. He said my endometriosis was very bad and had the medical students watching my procedure reiterate the same while I was still in a daze of anesthesia in the hospital. In the big scheme of things, losing an ovary and tube is not a big deal. Countless others have lost worse. I can still function to a certain point, but I can’t help grieve their loss. <br><br> I originally went in to get a big endometrioma on my ovary removed after having gone through routine vaginal ultrasounds to monitor its growth—as if it was a bomb about to detonate. I do really like my doctor because he is attentive, sensitive, and gave me a big hug before my procedure. He’s semi-retired and white, and I actually wouldn’t trade him for a woman. I know I’m lucky in this respect. <br><br> Having endometriosis is extremely painful and burdensome; it’s a state in which you must be as still as possible, otherwise, the sharp corner of a heavy wooden dresser weighing down on you will finally cave into your ovary and crush it into nonexistence. Or the even sharper edge of a metal bar will do worse damage. You learn to develop a heightened awareness and stillness while grudgingly accepting, for the moment, that your desires and wishes in life will somehow and hopefully manifest. The sheer anger and depression resulting from this consignment to pain—such visceral pain—is enough for one to want to destroy everything. <br><br> As horrific as this disease is, rendering you an invalid for months at a time, if not a week or more per month during your period years, I am grateful for it all. If it wasn’t for this disease, I would not have been introduced to balance, self-nurture and care, and learning how to draw healthy boundaries with others. There’s a huge learning curve involved; trying to find a level of balance and harmony amidst what feels like a constant nightmare is quite elusive.",
                "img/people/asoi.png",
                "https://www.endofound.org/these-heavy-rocks-in-my-womb-are-part-of-my-path-anjali-sois-endo-story"
            ),
    
            18 : new person (
                "Angelique Hill",
                "30s",
                "Alabama, USA",
                "I remember being on the bathroom floor at my university, curled over in pain. My body was so hot that I thought I was going to faint. I kept thinking, “If I can’t get up, I can at least crawl in the hallway so someone could see me just in case I pass out.” That was the day I knew that my periods weren’t normal, and something else was terribly wrong with my body. <br><br> That same day, I researched my symptoms, which were painful: heavy periods, bowel pain, bloating, and nausea. I came across the term endometriosis. I read about how it affects 1 in 10 people assigned female at birth, how it can spread all over the body, and how there is no known cure. I was terrified. So I immediately made an appointment with my gynecologist to discuss my situation. <br><br> At the appointment, I shared my symptoms and research findings with my OBGYN. He agreed that it could be endometriosis, but first he wanted to do a few other exams just to rule out other conditions that present similar symptoms, like fibroids. What’s interesting is that I have heard of fibroids being a condition that’s 'common' in Black women; in fact, I knew several African-American women close to me who had them—but I had never heard of endometriosis in my life. I was honestly hoping I had fibroids instead of a disease that was a complete mystery to me. <br><br> All of my tests came back negative: no fibroids, not even a single cyst. My doctor gave me the rundown on how the procedure would go and how he would burn off any endometrial tissue that is found. This is also when he told me that my pain may only be relieved for a very short time before coming back. I felt so defeated. I knew there was no cure, but I was hoping that I could at least get a few years of being pain-free. However at that point, I was looking forward to any amount of time without the pain, so we decided to go ahead and schedule a laparoscopic surgery a week out from my appointment. <br><br> After the surgery, my doctor told me that he found endometriosis. I was diagnosed at stage 3, meaning that there were many deep implants and adhesions. Note that it’s possible to have ovarian cysts as well in this stage, but that just didn’t apply to my specific diagnosis. He told me that my surgery was a 'textbook case', and definitely one of the worst he had seen. I looked at the pictures that were taken during surgery and I was so shocked to see these little adhesions everywhere. With the amount of pain that I was in, I expected them to be a lot bigger. It’s amazing how something so tiny can cause so much damage.",
                "img/people/AngeliqueHill.png",
                "https://www.endofound.org/helping-others-with-endo-gives-me-strength-to-fight-for-myself-angelique-hills-endo-story"
            ),
    
            19 : new person (
                "Marissa Swing",
                "30",
                "Indiana, USA",
                "My story started at the beginning of my cycles. I had my first at 12 years old. I remember being miserable and bloated and upset, feeling like I was drowning in blood. Even as all the women in my life were celebrating my new womanhood. I didn't meet that monster again for another seven months. We were taught in our health classes that you could expect your periods to regulate within two years of starting them. I counted down the months, waiting and waiting for it to improve. By 14 it hadn't. By 16 it hadn't. By 18 I had gotten used to my body's quirks and learned how to mostly prevent leaks and overflow problems. Learned to survive on Midol and Pamprin. <br><br> By 19 I had noticed severe bloating when I ate certain foods. I tried going gluten free to help myself, sometimes I thought it worked. I miraculoulsy conceived my first child at 20. Her pregnancy and birth was perfectly normal. However, my body only went downhill after that. My already iffy cycles became even less apparent. I only had two to three a year. I gained weight and started to struggle with other hormone issues. We started trying to baby number two about two years later. Nothing was working, and it was hard to track my cycles when they weren't happening. I went for testing and confirmed multiple hormone imbalances. We eventually conceived our second child on our own after fertility intverventions failed, but my pain started to get worse after my son was born. I start bleeding between cycles randomly, and I was having pain radiating from my ribs down to my knees. I suffered through multiple doctors telling me to deal with it, telling me there was nothing to be done, telling me some people just have worse periods than others. I finally found a doctor willing to test for endometriosis and underwent an exploratory laparoscopy in July 2021. They found endometriosis, as well as pelvic congestion and PCOS. I finally had answers, but that was just the tip of the iceberg. <br><br> My body is especially sensitive to hormone medications. Every attempt at medicating my body to manage pain or shrink my endometriosis resulted in severe mood swings, crippling depression, and weight gain. My only option going forward is surgery, but I have to find a specialist because my adhesions are in a particularly dicey area in my body cavity; growing over my ureter. All of my treatment searches halted when I was surprised to find myself pregnant again in February 2022. My second son was born that year, and my cre has been halted since.",
                "img/people/mswing.jpg",
                "https://www.facebook.com/Vizcerasis"
            ),
        
        }
    
    
    ];

    

    fillCards(stories);
}

const fillCards = (stories) => {

    let mainArr = stories[0];

    Object.entries(mainArr).forEach(function (persons) {
 
        $(".flex-box").append($(`<button class="bioCard" id="${persons[1].name}"><img src="${persons[1].img}" alt= "Person biography photo"><p class="name">${persons[1].name}, ${persons[1].age} \r\n ${persons[1].location}</p></button>`));
        
        document.getElementById(persons[1].name).onclick = function () {displayStory(persons[1]); };

    });

};

$(document).ready(createCards);

const displayStory = (woman) => {

    $(".flex-box").prepend($(`<div class="floatBox"><h2 class="nameArea">${woman.name}</h2><p class="storyArea">${woman.story.replace(/'/g,"\'")}</p><p class="linkArea">Learn more here: <a href="${woman.url}" alt="Link to story">${woman.name}</a></p><button class="closeBox" onclick="closePopUp()">Close</button></div>`))


};

const closePopUp = () => {

    $(".floatBox").hide();

};

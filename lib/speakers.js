const Speakers = [
    {
        name: 'Akansha Bajpai',
        link: 'akansha-bajpai',
        title: 'Person',
        company: 'Earth',
        imageUrl: '/speakers/akansha.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        talkTitle: 'How to do Bakwaas',
        talkDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email: 'akanshabajpai0307@gmail.com',
        twitter: '@akansha'
    },
    {
        name: 'Devansh Srivastav',
        link: 'devansh-srivastav',
        title: 'Person',
        company: 'Earth',
        imageUrl: '/speakers/devansh.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        talkTitle: 'How to do Amazing Stuff',
        talkDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email: 'devansh.srivastav@gmail.com',
        twitter: '@devanshsriv'
    },
    {
        name: 'Elon Musk',
        link: 'elon-musk',
        title: 'Founder',
        company: 'Tesla',
        imageUrl: '/speakers/elon.png',
        bio: 'Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX; early investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI.',
        talkTitle: 'The future we\'re building — and boring',
        talkDescription: 'Presentation on Musk\'s new project digging tunnels under LA, the latest from Tesla and SpaceX and his motivation for building a future on Mars',
        email: 'elon.musk@tesla.com',
        twitter: '@elonmusk'
    },
    {
        name: 'Sundar Pichai',
        link: 'sundar-pichai',
        title: 'CEO',
        company: 'Google',
        imageUrl: '/speakers/sundar.png',
        bio: 'Sundar Pichai, is an Indian-American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google. Born in Chennai, India, Pichai earned his degree from IIT Kharagpur in metallurgical engineering.',
        talkTitle: 'Alphabet\'s Role in Fighting Misinformation and Safeguarding Elections',
        talkDescription: 'Misinformation can be dangerous. Online platforms can play a role in amplifying it. So the work we have done to understand what is either misinformation or low-quality content and make sure that doesn’t get recommended and shared has been the thrust of our efforts there.',
        email: 'sundar.pichai@google.com',
        twitter: '@sundarpichai'
    },
    {
        name: 'Satya Nadella',
        link: 'satya-nadella',
        title: 'CEO',
        company: 'Microsoft',
        imageUrl: '/speakers/satya.png',
        bio: 'Satya Narayana Nadella is an Indian-American business executive. He is the chief executive officer of Microsoft, succeeding Steve Ballmer in 2014. Before becoming CEO, he was the executive vice president of Microsoft\'s cloud and enterprise group, responsible for building and running the company\'s computing platforms.',
        talkTitle: 'Cloud, AI, data, and cyber security at Future Decoded events',
        talkDescription: 'Microsoft is betting big on the cloud - a new-found growth driver for the company. Its cloud service Azure has evolved with deeper integration with Artificial Intelligence and Machine Learning.',
        email: 'satya.nadella@microsoft.com',
        twitter: '@satyanadela'
    },
    {
        name: 'Sheldon Cooper',
        link: 'sheldon-cooper',
        title: 'Physicist',
        company: 'CalTech',
        imageUrl: '/speakers/sheldon.png',
        bio: 'Sheldon is a senior theoretical physicist at The California Institute of Technology (Caltech)  possessing a BS, MS, PhD, Sc.D., and an IQ of 187. Born in East Texas, he was a child prodigy, and received his PhD at age 16 from Caltech.',
        talkTitle: 'Super Asymmetry',
        talkDescription: 'The concept of super-asymmetry is related to super-symmetry string theory. In particle physics, "supersymmetry" is a proposed type of space-time symmetry that relates two basic classes of elementary particles: bosons, which have an integer-valued spin, and fermions, which have a half-integer spin.',
        email: 'sheldon.cooper@caltech.edu',
        twitter: '@sheldoncooper'
    },
    {
        name: 'Jethalal Gada',
        link: 'jethalal-gada',
        title: 'Owner',
        company: 'Gada Elect',
        imageUrl: '/speakers/jethalal.png',
        bio: 'Jethalal is a wealthy businessman from a Gujarati family. He was born to Champaklal Gada in Bhachau of Kutch district of Gujarat. His mother passed away in his childhood. He runs an electronics showroom "Gada Electronics" in Andheri, Mumbai. He lives in "Gokuldham Society" along with his father Champaklal, wife and son. He is befriended by all society members with Taarak Mehta being his best friend and his "fire brigade".',
        talkTitle: 'How to get into trouble',
        talkDescription: 'Jethalal is a wealthy but very unlucky person who usually gets in trouble. He is always irritated by his showroom workers Natu Kaka and Bagha, and Bagha’s fiancée Bawri and sometimes his family and some of his neighbours; mostly Patrakar Popatlal, secretary Aatmaram Bhide and scientist Krishnan Iyer. His luck is worst and consequently he gets trapped into problems.',
        email: 'jethalal@gadaelectronics.com',
        twitter: '@jethalal'
    },
    {
        name: 'Mr. Bean',
        link: 'mr-bean',
        title: 'Comedian',
        company: 'Comic',
        imageUrl: '/speakers/bean.png',
        bio: 'Mr. Bean lives in Flat 2, 12 Arbour Road, Highbury, London, England. His first name, which he refers to as Bean, and his profession, if any, are never mentioned. In the first film adaptation, Bean, "Mr." appears on his passport in the "first name" field, and he is shown employed as a guard at London\'s National Gallery. His date of birth is given variously as 15 September 1956, or as 6 January 1955.',
        talkTitle: 'How to do get better at comedy',
        talkDescription: 'Mr. Bean is childish, selfish, extremely competitive and brings various unusual schemes and contrivances to everyday tasks. He rarely speaks, and when he does, it is generally only a few mumbled words which are in a comically low-pitched voice. He also does not like people taking his things. Mr. Bean often seems unaware of basic aspects of the way the world works, and the programme usually features his attempts at what would normally be considered simple activities.',
        email: 'mr.bean@bean.world.com',
        twitter: '@mrbean'
    },
    {
        name: 'Tony Stark',
        link: 'tony-stark',
        title: 'IronMan',
        company: 'Avengers',
        imageUrl: '/speakers/robert.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        talkTitle: 'How to do Bakwaas',
        talkDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email: 'akanshabajpai0307@gmail.com',
        twitter: '@akansha'
    },
    {
        name: 'Arijit Singh',
        link: 'arijit-singh',
        title: 'Singer',
        company: 'Bollywood',
        imageUrl: '/speakers/arijit.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        talkTitle: 'How to do Amazing Stuff',
        talkDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email: 'devansh.srivastav@gmail.com',
        twitter: '@devanshsriv'
    },
    {
        name: 'Harry Potter',
        link: 'harry-potter',
        title: 'Wizard',
        company: 'Hogwarts',
        imageUrl: '/speakers/harry.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        talkTitle: 'How to do Bakwaas',
        talkDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email: 'akanshabajpai0307@gmail.com',
        twitter: '@akansha'
    },
    {
        name: 'Devansh Srivastav',
        link: 'devansh-srivastav',
        title: 'Person',
        company: 'Earth',
        imageUrl: '/speakers/devansh.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        talkTitle: 'How to do Amazing Stuff',
        talkDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email: 'devansh.srivastav@gmail.com',
        twitter: '@devanshsriv'
    }
]

export { Speakers }
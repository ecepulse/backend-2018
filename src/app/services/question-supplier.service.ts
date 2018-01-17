import { Injectable } from '@angular/core';

import { AutocompleteQuestion } from '../util/question-autocomplete';
import { TextboxQuestion } from '../util/question-textbox';
import { CheckboxQuestion }  from '../util/question-checkbox';
import { RadioQuestion } from '../util/question-radio';
import { QuestionBase } from '../util/question-base';

@Injectable()
export class QuestionSupplierService {

  constructor() { }

  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'first_name',
        label: 'First name',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'last_name',
        label: 'Last name',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        required: true,
        type: 'email',
        order: 3
      }),
      new RadioQuestion({
        key: 'applicant_type',
        label: 'Applicant type',
        required: true,
        options: [
          {key: 'ustu', value: 'UIUC Undergraduate Student'},
          {key: 'gstu', value: 'UIUC Graduate Student'},
          {key: 'prof', value: 'UIUC Professor'},
          {key: 'other', value: 'Other'}
        ],
        order: 4
      }),
      new AutocompleteQuestion({
        key: 'major',
        label: 'Major',
        required: true,
        options: ['Computer Engineer',
          'Electrical Engineer',
          'Computer Science',
        'Accountancy',
        'ACES Undeclared',
        'Acting',
        'Actuarial Science',
        'Advertising',
        'Aerospace Engineering',
        'African American Studies',
        'Agri-Accounting',
        'Agribusiness, Markets & Management',
        'Agricultural & Biological Engineering',
        'Agricultural & Biological Engineering',
        'Agricultural & Consumer Economics',
        'Agricultural Communications',
        'Agricultural Leadership Education',
        'Agricultural Science Education',
        'Agroecology',
        'Animal Sciences',
        'Anthropology',
        'Architectural Studies',
        'Art Education (K-12)',
        'Art History',
        'Asian American Studies',
        'Astronomy',
        'Atmospheric Sciences',
        'Audiology',
        'Biochemistry',
        'Bioengineering',
        'Biological Sciences (Crop Sciences)',
        'Biology',
        'Chemical & Biomolecular Engineering',
        'Chemistry',
        'Child & Adolescent Development',
        'Civil Engineering',
        'Classical Archaeology',
        'Classical Civilization',
        'Classics',
        'Communication',
        'Community Health',
        'Companion Animal & Equine Science',
        'Comparative & World Literature',
        'Computer Science & Anthropology',
        'Computer Science & Astronomy',
        'Computer Science & Chemistry',
        'Computer Science & Crop Sciences',
        'Computer Science & Linguistics',
        'Consumer Economics & Finance',
        'Costume Design & Technology',
        'Crafts: Metals/Jewelry',
        'Creative Writing',
        'Crop Agribusiness',
        'Crop Sciences',
        'Crops',
        'Cultural Linguistic Diversity',
        'Dance',
        'Dietetics',
        'Early Childhood Education (Birth-Grade 2)',
        'Earth, Society & Environmental Sustainability',
        'East Asian Languages & Cultures',
        'Economics',
        'Electrical Engineering',
        'Elementary Education (Grades 1-6)',
        'Engineering Mechanics',
        'English',
        'Entrepreneurship',
        'Environmental Economics & Policy',
        'Family Studies',
        'Farm Management',
        'Finance',
        'Finance in Agri-Business',
        'Financial Planning',
        'Fish & Wildlife Conservation',
        'Food Animal Production and Management ',
        'Food Science',
        'Food Science & Human Nutrition',
        'French',
        'Gender & Women\'s Studies',
        'Geography & Geographic Information Science',
        'Geology',
        'Germanic Studies',
        'Global Change & Landscape Dynamics',
        'Global Studies',
        'Graphic Design',
        'Greek',
        'Health and Aging ',
        'Health Behavior Change',
        'Health Diversity',
        'Health Education & Promotion',
        'Health Planning & Administration',
        'Health Sciences, Interdisciplinary ',
        'History',
        'History of Art',
        'Horticultural Food Systems',
        'Hospitality Management',
        'Human Development & Family Studies',
        'Human Dimensions of the Environment',
        'Human Nutrition',
        'Industrial Design',
        'Industrial Engineering',
        'Information Systems ',
        'Integrative Biology',
        'Interdisciplinary Studies',
        'International Business',
        'Italian',
        'Jazz Performance',
        'Jewish Studies*',
        'Journalism',
        'Kinesiology',
        'Kinesiology - Physical Education (K-12)',
        'Landscape Architecture ',
        'Latin',
        'Latin American Studies',
        'Latina/Latino Studies',
        'Learning & Education Studies',
        'Lighting Design',
        'Linguistics',
        'Management',
        'Marketing',
        'Materials Science & Engineering',
        'Mathematics',
        'Mathematics & Computer Science',
        'Mechanical Engineering',
        'Media & Cinema Studies',
        'Medieval Civilization*',
        'Middle Grades Education (Grades 5-8)',
        'Molecular & Cellular Biology',
        'Music',
        'Music Composition Theory',
        'Music Education (K-12)',
        'Music Instrumental Performance',
        'Music Open Studies',
        'Music Voice Performance',
        'Musicology',
        'Natural Resources & Environmental Sciences',
        'Neuroscience of Communication',
        'New Media',
        'Nuclear, Plasma & Radiological Engineering',
        'Nursing',
        'Operations Management',
        'Painting',
        'Philosophy',
        'Photography',
        'Physics',
        'Physics, Engineering',
        'Plant Biotechnology & Molecular Biology',
        'Plant Protection ',
        'Policy, International Trade & Development',
        'Political Science',
        'Portuguese',
        'Psychology',
        'Public Policy & Law',
        'Recreation Management',
        'Recreation, Sport & Tourism',
        'Rehabilitation Studies',
        'Religion',
        'Resource Conservation & Restoration Ecology',
        'Russian, East European & Eurasian Studies',
        'Scenic Design',
        'Scenic Technology',
        'Science, Pre-Veterinary & Medical',
        'Sculpture',
        'Secondary Education',
        'Secondary Education: Agricultural',
        'Secondary Education: Biology',
        'Secondary Education: Chemistry',
        'Secondary Education: Earth Science',
        'Secondary Education: English ',
        'Secondary Education: Mathematics',
        'Secondary Education: Physics',
        'Secondary Education: Social Studies',
        'Slavic Studies',
        'Social Work',
        'Sociology',
        'Sound Design & Technology',
        'Spanish',
        'Special Education',
        'Speech & Hearing Science',
        'Speech Language Pathology',
        'Sport Management',
        'Stage Management',
        'Statistics',
        'Statistics & Computer Science',
        'Supply Chain Management',
        'Systems Engineering and Design ',
        'Teacher Education: Art (K-12)',
        'Teacher Education: French (K-12)',
        'Teacher Education: German (K-12)',
        'Teacher Education: Japanese (K-12)',
        'Teacher Education: Kinesiology - Physical Education (K-12)',
        'Teacher Education: Latin (K-12)',
        'Teacher Education: Mandarin Chinese (K-12)',
        'Teacher Education: Spanish (K-12)',
        'Technical Systems Management',
        'Theatre',
        'Theatre Studies',
        'Tourism Management',
        'Undeclared**',
        'Urban Studies & Planning',
        'Pre-Dentistry',
        'Pre-Law',
        'Pre-Medicine',
        'Pre-Occupational Therapy',
        'Pre-Optometry',
        'Pre-Pharmacy',
        'Pre-Physical Therapy',
        'Pre-Veterinary Medicine'
        ],
        order: 5
      }),
      new TextboxQuestion({
        key: 'grad_year',
        label: 'Graduation year',
        required: true,
        type: 'number',
        order: 6
      }),
      new RadioQuestion({
        key: 'shirt_size',
        label: 'Shirt Sizes',
        options: [
          {key: 's', value: 'S'},
          {key: 'm', value: 'M'},
          {key: 'l', value: 'L'},
          {key: 'xl', value: 'XL'}
        ],
        required: true,
        order: 7
      }),
      new CheckboxQuestion({
        key: 'diet',
        label: 'Diet restrictions',
        options: [
          {key: 'none', value: 'None'},
          {key: 'veg', value: 'Vegetarian'},
          {key: 'vegan', value: 'Vegan'},
          {key: 'glu_free', value: 'Gluten Free'},
          {key: 'other', value: 'Other'}
        ],
        required: true,
        order: 8
      }),
      new RadioQuestion({
        key: 'gender',
        label: 'Gender',
        options: [
          {key: 'female', value: 'Female'},
          {key: 'male', value: 'Male'},
          {key: 'transgen', value: 'Transgender'},
          {key: 'other', value: 'Other'},
          {key: 'dnwts', value: 'Do not wish to specify'}
        ],
        required: true,
        order: 9
      }),
      new TextboxQuestion({
        key: 'age',
        label: 'Age',
        type: 'number',
        required: true,
        order: 10
      }),
      new TextboxQuestion({
        key: 'github',
        label: 'Github',
        order: 11
      }),
      new TextboxQuestion({
        key: 'linkedin',
        label: 'LinkedIn',
        order: 12
      }),
      new CheckboxQuestion({
        key: 'prof_int',
        label: 'Professional interest',
        options: [
          {key: 'intern', value: 'Internship'},
          {key: 'fulltime', value: 'Fulltime'},
          {key: 'fs', value: 'Further studies (Academic)'}
        ],
        order: 13
      }),
      new CheckboxQuestion({
        key: 'prev_pulse',
        label: 'How did you hear of Pulse?',
        required: true,
        options: [
          {key: 'pa', value: 'Previously attended'},
          {key: 'friend', value: 'Friend'},
          {key: 'posters', value: 'Posters'},
          {key: 'soc_med', value: 'Social Media'},
          {key: 'radio', value: 'Radio'},
          {key: 'other', value: 'Other'}
        ],
        order: 14
      }),
      new CheckboxQuestion({
        key: 'event_int',
        label: 'Which events are you interested in?',
        required: true,
        options: [
          {key: 'keynote', value: 'Keynote'},
          {key: 'tt', value: 'Tech Talks'},
          {key: 'workshops', value: 'Workshops'},
          //{key: 'sp', value: 'Startup Panel'},
          {key: 'comp', value: 'Competition'},
          {key: 'ss', value: 'Speaker Series'},
          {key: 'witd', value: 'Women in Tech Day'}
        ],
        order: 15
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getHsQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'first_name',
        label: 'First name',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'last_name',
        label: 'Last name',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        required: true,
        type: 'email',
        order: 3
    }),
      new TextboxQuestion({
        key: 'age',
        label: 'Age',
        type: 'number',
        required: true,
        order: 4
    }),
      new RadioQuestion({
        key: 'grade_level',
        label: 'Grade level',
        options: [
          {key: 'fresh', value: 'Freshman'},
          {key: 'soph', value: 'Sophomore'},
          {key: 'jr', value: 'Junior'},
          {key: 'sr', value: 'Senior'}
        ],
        required: true,
        order: 5
    }),
      new TextboxQuestion({
        key: 'high_school_name',
        label: 'High school name',
        required: true,
        order: 6
    }),
      new RadioQuestion({
        key: 'workshop_session_1_preference',
        label: 'Workshop Session 1 Preference',
        options: [
          {key: 'ab', value: 'Arduino Basics'},
          {key: 'aw', value: 'API Workshop'}
        ],
        required: true,
        order: 7
    }),
      new RadioQuestion({
        key: 'workshop_session_2_preference',
        label: 'Workshop Session 2 Preference',
        options: [
        {key: 'lh', value: 'LED Hearts'},
        {key: 'psg', value: 'Python Snake Game'}
        ],
        required: true,
        order: 8
    }),
      new RadioQuestion({
        key: 'workshop_session_3_preference',
        label: 'Workshop Session 3 Preference',
        options: [
        {key: 'scl', value: 'Sound Controlled LED'},
        {key: 'rpcn', value: 'Raspberry Pi Communication Network'}
        ],
        required: true,
        order: 9
    })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

}

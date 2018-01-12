/**
 * Created by rahul_ram on 1/4/18.
 */

const basic_reg_field = [
  {
    id: 'first_name',
    required: true
  },
  {
    id: 'last_name',
    required: true
  },
  {
    id: 'email',
    required: true
  },
  {
    id: 'applicant_type',
    type: 'radio',
    options: ['UIUC Undergraduate Student', 'UIUC Graduate Student', 'UIUC Professor', 'Other']
  },
  {
    restrict: 'student',
    id: 'major',
    options: ['Computer Engineer',
      'Electrical Engineer',
      'Computer Science']
  },
  {
    restrict: 'student',
    id: 'graduation_year'
  },
  {
    restrict: 'prof',
    id: 'department',
    type: 'radio',
    options: ['Electrical and Computer Engineering', 'Computer Science']
  },
  {
    id: 'shirt_size',
    type: 'radio',
    options: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'diet',
    type: 'radio',
    options: ['NONE', 'VEGETARIAN', 'VEGAN', 'GLUTEN_FREE', 'Other']
  },
  {
    id: 'gender',
    type: 'radio',
    options: ['FEMALE', 'MALE', 'TRANSGENDER', 'OTHER', 'DO NOT WISH TO SPECIFY']
  },
  {
    id: 'age',
    type: 'picker'
  },
  {
    id: 'github'
  },
  {
    id: 'linkedin'
  },
  {
    id: 'resume',
    type: 'file'
  },
  {
    id: 'professional_interest',
    type: 'checkbox',
    options: ['INTERNSHIP', 'FULLTIME', 'FURTHER_STUDIES', 'ACADEMIC']
  },
  {
    id: 'previous_pulse',
    type: 'checkbox',
    options: ['Previously attended', 'Friend', 'Posters', 'Social Media', 'Radio', 'Other']
  },
  {
    id: 'event_interest',
    type: 'checkbox',
    options: ['Keynote', 'Tech Talks', 'Workshops', 'Startup Panel', 'Competition', 'Speaker Series', 'Women in Tech Day']
  }
];

export default basic_reg_field;

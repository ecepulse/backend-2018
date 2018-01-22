const hs_reg_field = [
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
    id: 'grade_level',
    type: 'radio',
    options: ['Freshman', 'Sophomore', 'Junior', 'Senior'],
    required: true
  },
  {
    id: 'age',
    type: 'picker',
    required: true
  },
  {
    id: 'high_school_name',
    required: true
  },
  {
    id: 'workshop_session_1_preference',
    type: 'radio',
    options: ['Arduino Basics', 'API Workshop'],
    required: true
  },
  {
    id: 'workshop_session_2_preference',
    type: 'radio',
    options: ['LED Hearts', 'Python Snake Game'],
    required: true
  },
  {
    id: 'workshop_session_3_preference',
    type: 'radio',
    options: ['Sound Controlled LED', 'Raspberry Pi Communication Network'],
    required: true
  }
];

export default hs_reg_field;

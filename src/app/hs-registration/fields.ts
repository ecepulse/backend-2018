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
    id: 'grade_level',
    type: 'radio',
    options: ['Freshman', 'Sophomore', 'Junior', 'Senior']
  },
  {
    id: 'age',
    type: 'picker'
  },
  {
    id: 'workshop_session_1_preference',
    type: 'radio',
    options: ['Arduino Basics', 'API Workshop']
  },
  {
    id: 'workshop_session_2_preference',
    type: 'radio',
    options: ['LED Hearts', 'Python Snake Game']
  },
  {
    id: 'workshop_session_3_preference',
    type: 'radio',
    options: ['Sound Controlled LED', 'Raspberry Pi Communication Network']
  }
];

export default hs_reg_field;

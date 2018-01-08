/**
 * Created by rahul_ram on 1/4/18.
 */

const basic_reg_field = [
  {
    id: 'first_name',
    required: true
***REMOVED***,
  {
    id: 'last_name',
    required: true
***REMOVED***,
  {
    id: 'email',
    required: true
***REMOVED***,
  {
    id: 'applicant_type',
    type: 'radio',
    options: ['UIUC Undergraduate Student', 'UIUC Graduate Student', 'UIUC Professor', 'Other']
***REMOVED***,
  {
    restrict: 'student',
    id: 'major',
    options: ['Computer Engineer',
      'Electrical Engineer',
      'Computer Science']
***REMOVED***,
  {
    restrict: 'student',
    id: 'graduation_year'
***REMOVED***,
  {
    restrict: 'prof',
    id: 'department',
    options: ['Electrical and Computer Engineering', 'Computer Science']
***REMOVED***,
  {
    id: 'shirt_size',
    type: 'radio',
    options: ['S', 'M', 'L', 'XL']
***REMOVED***,
  {
    id: 'diet',
    type: 'radio',
    options: ['NONE', 'VEGETARIAN', 'VEGAN', 'GLUTEN_FREE']
***REMOVED***,
  {
    id: 'gender',
    type: 'radio',
    options: ['FEMALE', 'MALE', 'TRANSGENDER', 'OTHER', 'DO NOT WISH TO SPECIFY']
***REMOVED***,
  {
    id: 'age',
    type: 'picker'
***REMOVED***,
  {
    id: 'github'
***REMOVED***,
  {
    id: 'linkedin'
***REMOVED***,
  {
    id: 'resume',
    type: 'file'
***REMOVED***,
  {
    id: 'professional_interest',
    type: 'checkbox',
    options: ['INTERNSHIP', 'FULLTIME', 'FURTHER_STUDIES', 'ACADEMIC']
***REMOVED***,
  {
    id: 'previous_pulse',
    type: 'checkbox',
    options: ['Previously attended', 'Friend', 'Posters', 'Social Media', 'Radio', 'Other']
***REMOVED***,
  {
    id: 'event_interest',
    type: 'checkbox',
    options: ['Keynote', 'Tech Talks', 'Workshops', 'Startup Panel', 'Competition', 'Speaker Series', 'Women in Tech Day']
***REMOVED***
];

export default basic_reg_field;

const headerContainer = document.querySelector('#header-container');
headerContainer.style.backgroundColor = '#00B069'

const emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.backgroundColor = '#FF9F84'

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = '#F9DB5E'

const textNoEmergency = document.querySelectorAll('.no-emergency-tasks div h3');
textNoEmergency[0].style.backgroundColor = '#000'
textNoEmergency[1].style.backgroundColor = '#000'

const textEmergency = document.querySelectorAll('.emergency-tasks div h3');
textEmergency[0].style.backgroundColor = '#A500F3'
textEmergency[1].style.backgroundColor = '#A500F3'

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#003533'
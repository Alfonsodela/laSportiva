import './styles/styles.scss';
import 'bootstrap';

function addListeners() {
  TODO
  console.log('addListeners');
}
// 
window.onload = () => {
  
 
  const createContent = () => {
    const ul = document.getElementById('hamburguer').classList.toggle('is-hidden');
  }

  const addListeners = () => {
    const btn = document.getElementById('btn-add-content');
    btn.addEventListener('click', 'createContent');
  }
};

addListeners();


function addItemFields() {
  let numItems = document.getElementById('num_items').value;
  let itemsDiv = document.getElementById('items');
  itemsDiv.innerHTML = '';
  for (let i = 0; i < numItems; i++) {
      let weightLabel = document.createElement('label');
      weightLabel.setAttribute('for', 'weight${i}');
      weightLabel.innerText =' وزن البضاعة ${i + 1}:';
      itemsDiv.appendChild(weightLabel);
      
      let weightInput = document.createElement('input');
      weightInput.type = 'number';
      weightInput.id = 'weight${i}';
      weightInput.name = 'weights';
      weightInput.required = true;
      itemsDiv.appendChild(weightInput);
      
      itemsDiv.appendChild(document.createElement('br'));
      
      let valueLabel = document.createElement('label');
      valueLabel.setAttribute('for', 'value${i}');
      valueLabel.innerText =' قيمة البضاعة ${i + 1}:';
      itemsDiv.appendChild(valueLabel);
      
      let valueInput = document.createElement('input');
      valueInput.type = 'number';
      valueInput.id = 'value${i}';
      valueInput.name = 'values';
      valueInput.required = true;
      itemsDiv.appendChild(valueInput);
      
      itemsDiv.appendChild(document.createElement('br'));
      itemsDiv.appendChild(document.createElement('br'));
  }
}

function addAddressFields() {
  let numAddresses = document.getElementById('num_addresses').value;
  let addressesDiv = document.getElementById('addresses');
  addressesDiv.innerHTML = '';
  for (let i = 0; i < numAddresses; i++) {
      let addressLabel = document.createElement('label');
      addressLabel.setAttribute('for', 'address${i}');
      addressLabel.innerText =' أوقات السفر من العنوان  ${i + 1}:';
      addressesDiv.appendChild(addressLabel);
      
      let addressInput = document.createElement('input');
      addressInput.type = 'text';
      addressInput.id = 'address${i}';
      addressInput.name = 'graph';
      addressInput.required = true;
      addressInput.placeholder = 'أدخل الأوقات مفصولة بمسافات';
      addressesDiv.appendChild(addressInput);
      
      addressesDiv.appendChild(document.createElement('br'));
      addressesDiv.appendChild(document.createElement('br'));
  }
}
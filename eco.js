document.getElementById('buy').onclick = function () {
    document.getElementById('pop-up').showModal();
};


function x() {
    document.getElementById('pop-up').close();
}

let finalOrderSummary = ""; 

function data() {
    const colorSelect = document.getElementById('colorSelect');
    const engravingSelect = document.getElementById('engravingSelect');
    const packagingSelect = document.getElementById('Packagingselect');
    const totalDisplay = document.querySelector('.Total');
    const priceDisplay = document.getElementById('price');

    let total = 750.00;

    
    if (!colorSelect.value) {
        alert("❗ Please select a color.");
        return;
    }
    if (!engravingSelect.value) {
        alert("❗ Please select an engraving option.");
        return;
    }
    if (!packagingSelect.value) {
        alert("❗ Please select a packaging option.");
        return;
    }

    
    if (engravingSelect.value === "yes") total += 94;
    if (packagingSelect.value === "cotton") total += 25;
    if (packagingSelect.value === "pulp") total += 15;

    const formattedTotal = `R${total.toFixed(2)}`;
    totalDisplay.textContent = formattedTotal;
    priceDisplay.textContent = formattedTotal;

   
    finalOrderSummary = `
Product: EcoSmart Water Bottle
Color: ${colorSelect.value}
Engraving: ${engravingSelect.value}
Packaging: ${packagingSelect.value}
Total Price: ${formattedTotal}
    `;

    alert(`✅ Item added to cart successfully!\nTotal: ${formattedTotal}`);

    
    document.getElementById('pop-up').close();
}


document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();

    if (!finalOrderSummary) {
        alert("⚠️ Please add a product to cart first before submitting your contact details.");
        return;
    }

    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const checkbox = document.getElementById('click');

    if (!name || !email || !message) {
        alert("⚠️ Please complete all the fields in the contact form.");
        return;
    }

    if (!checkbox.checked) {
        alert("⚠️ Please agree to the terms and conditions before submitting.");
        return;
    }

    const subject = encodeURIComponent("EcoSmart Water Bottle Order & Contact Info");
    const body = encodeURIComponent(
`Hi EcoSmart Team,

Here is my order and contact info:

Name: ${name}
Email: ${email}
Message: ${message}

Order Details:
${finalOrderSummary}

Thank you!`
    );

    alert('thank you your page is successfully')
    window.location.href = `mailto:orders@ecosmartus.com?subject=${subject}&body=${body}`;
});

const status_dropdowns = document.querySelectorAll(".status_dropdown");

const alert_box = document.querySelector(".alert_box");

status_dropdowns.forEach((status_dropdown, index)=>{
    const products = ["Chinese Emerald Pendant", "Necklace", "Earrings"];

    status_dropdown.addEventListener("change", (e)=>{
        status_dropdown.dataset.status = e.target.value;

        alert_box.style.display = "block";

        alert_box.innerHTML = `${products[index]} status updated to: ${e.target.value}`;

        setTimeout(()=>{
            alert_box.style.display = "none";
        }, [3000])
    })
})
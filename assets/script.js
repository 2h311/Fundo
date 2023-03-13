const count = document.querySelector("span.review-count")
count.innerText = 0

const updateCount = () => {
    const target = +count.getAttribute("data-target")
    const currentValue = +count.innerText
    const incrementBy = target / 250

    if (currentValue < target) {
        count.innerText = `${Math.ceil(currentValue + incrementBy)}`
        setTimeout(updateCount, 50)
    } else {
        count.innerText = target
    }
}
updateCount()

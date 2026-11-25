
document.addEventListener("DOMContentLoaded", function () {
    // 버튼 생성
    const scrollBox = document.createElement("div");
    scrollBox.id = "scrollButtons";

    scrollBox.innerHTML = `
        <button id="scrollTop" title="맨 위로">▲</button>
        <button id="scrollBottom" title="맨 아래로">▼</button>
    `;

    document.body.appendChild(scrollBox);

    const topBtn = document.getElementById("scrollTop");
    const bottomBtn = document.getElementById("scrollBottom");

    // 버튼 스타일
    const style = document.createElement("style");
    style.textContent = `
        #scrollButtons {
            position: fixed;
            right: 30px;
            bottom: 30px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 9999;
        }

        #scrollButtons button {
            width: 45px;
            height: 45px;
            border: none;
            border-radius: 50%;
            background-color: #333;
            color: white;
            font-size: 20px;
            cursor: pointer;
            display: none;
            transition: 0.3s;
        }

        #scrollButtons button:hover {
            background-color: #666;
            transform: scale(1.1);
        }
    `;

    document.head.appendChild(style);

    // 스크롤 위치에 따라 버튼 표시
    function checkScroll() {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // 최상단에서 200px 이상 내려가면 위로 가기 표시
        topBtn.style.display = scrollTop > 200 ? "block" : "none";

        // 최하단에서 200px 이상 떨어져 있으면 아래로 가기 표시
        bottomBtn.style.display =
            scrollTop + windowHeight < documentHeight - 200
                ? "block"
                : "none";
    }

    // 맨 위로 이동
    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 맨 아래로 이동
    bottomBtn.addEventListener("click", function () {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    checkScroll();
});

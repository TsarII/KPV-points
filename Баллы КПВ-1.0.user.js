// ==UserScript==
// @name         Баллы КПВ
// @namespace    http://tampermonkey.net/
// @author       Цари / Ритуал [1241910]
// @version      1.0
// @match        http*://*.catwar.net/*
// @match        http*://*.catwar.su/*
// @updateURL    https://raw.githubusercontent.com/TsarII/KPV-points/main/Баллы%20КПВ-1.0.user.js
// @downloadURL  https://raw.githubusercontent.com/TsarII/KPV-points/main/Баллы%20КПВ-1.0.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // =========================
    // МЕДАЛИ
    // =========================

    const medalOverlays = {

        // 1 балл
        "665": "https://i.ibb.co/Swk8Fxpy/1.png",
        "155": "https://i.ibb.co/Swk8Fxpy/1.png",
        "154": "https://i.ibb.co/Swk8Fxpy/1.png",
        "668": "https://i.ibb.co/Swk8Fxpy/1.png",
        "839": "https://i.ibb.co/Swk8Fxpy/1.png",

        // 3 балла
        "162": "https://i.ibb.co/prs25cxg/3.png",
        "157": "https://i.ibb.co/prs25cxg/3.png",
        "666": "https://i.ibb.co/prs25cxg/3.png",
        "163": "https://i.ibb.co/prs25cxg/3.png",
        "167": "https://i.ibb.co/prs25cxg/3.png",
        "178": "https://i.ibb.co/prs25cxg/3.png",
        "251": "https://i.ibb.co/prs25cxg/3.png",
        "667": "https://i.ibb.co/prs25cxg/3.png",
        "932": "https://i.ibb.co/prs25cxg/3.png",
        "1020": "https://i.ibb.co/prs25cxg/3.png",
        "2644": "https://i.ibb.co/prs25cxg/3.png",
        "2878": "https://i.ibb.co/prs25cxg/3.png",
        "3350": "https://i.ibb.co/prs25cxg/3.png",
        "3483": "https://i.ibb.co/prs25cxg/3.png",
        "894": "https://i.ibb.co/prs25cxg/3.png",
        "2762": "https://i.ibb.co/prs25cxg/3.png",
        "2780": "https://i.ibb.co/prs25cxg/3.png",
        "5027": "https://i.ibb.co/prs25cxg/3.png",

        // 4 балла
        "161": "https://i.ibb.co/fsVWmkL/4.png",
        "160": "https://i.ibb.co/fsVWmkL/4.png",
        "164": "https://i.ibb.co/fsVWmkL/4.png",
        "1097": "https://i.ibb.co/fsVWmkL/4.png",
        "3835": "https://i.ibb.co/fsVWmkL/4.png",
        "4337": "https://i.ibb.co/fsVWmkL/4.png",

        // 6 баллов
        "252": "https://i.ibb.co/FkwC3XxW/6.png",

        // 7 баллов
        "664": "https://i.ibb.co/xtgTsH7v/7.png",
        "422": "https://i.ibb.co/xtgTsH7v/7.png",
        "280": "https://i.ibb.co/xtgTsH7v/7.png",
        "168": "https://i.ibb.co/xtgTsH7v/7.png",
        "2656": "https://i.ibb.co/xtgTsH7v/7.png",
        "2655": "https://i.ibb.co/xtgTsH7v/7.png",

        // 8 баллов
        "663": "https://i.ibb.co/Kj1TCzDV/8.png"
    };

    // =========================
    // ПАМЯТНЫЕ ПРЕДМЕТЫ
    // =========================

    const relicOverlays = {

        // 0 баллов
        "Властелин всех двух стихий": "https://i.ibb.co/XfgLyvsq/0.png",
        "Отколовшаяся сосулька": "https://i.ibb.co/XfgLyvsq/0.png",
        "Окроплённое перо": "https://i.ibb.co/XfgLyvsq/0.png",
        "Льдинка с отпечатком лапы": "https://i.ibb.co/XfgLyvsq/0.png",
        "Визитка": "https://i.ibb.co/XfgLyvsq/0.png",
        "Сверкающая чешуйка": "https://i.ibb.co/XfgLyvsq/0.png",
        "Тот, кто держал остриё": "https://i.ibb.co/XfgLyvsq/0.png",
        "Разбитое зеркало": "https://i.ibb.co/XfgLyvsq/0.png",
        "Ягодный след": "https://i.ibb.co/XfgLyvsq/0.png",
        "Старый кулон": "https://i.ibb.co/XfgLyvsq/0.png",
        "Маска": "https://i.ibb.co/XfgLyvsq/0.png",
        "Меч и курочка": "https://i.ibb.co/XfgLyvsq/0.png",
        "Тлеющий уголёк": "https://i.ibb.co/XfgLyvsq/0.png",
        "Деревянный солдатик": "https://i.ibb.co/XfgLyvsq/0.png",
        "Хранитель Очага": "https://i.ibb.co/XfgLyvsq/0.png",
        "Окаменелое гнездо": "https://i.ibb.co/XfgLyvsq/0.png",
        "Подарок": "https://i.ibb.co/XfgLyvsq/0.png",
        "Конверт": "https://i.ibb.co/XfgLyvsq/0.png",
        "Падение": "https://i.ibb.co/XfgLyvsq/0.png",
        "Гнилое яблочко": "https://i.ibb.co/XfgLyvsq/0.png",
        "Тьма багрового прошлого": "https://i.ibb.co/XfgLyvsq/0.png",
        "История о принце": "https://i.ibb.co/XfgLyvsq/0.png",
        "Цилиндр Щелкунчика": "https://i.ibb.co/XfgLyvsq/0.png",
        "Та, кто держала остриё": "https://i.ibb.co/XfgLyvsq/0.png",

        // 1 балл
        "В чём смысл жизни?": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Вестник новостей": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Спаситель от жажды": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Всезнайка": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Резное перышко": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Чудной камушек": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Меховый друг": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Командный дух!": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Воспоминания о работе": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Перо сойки": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Расколотый молнией": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Замёрзший клочок меха": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Свинка-копилка": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Странная рыба": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Клыки стихии": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Пылающее перо": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Ледяной череп": "https://i.ibb.co/ZzB8rWtF/1.png",

        // 2 балла
        "Искатель приключений": "https://i.ibb.co/99DH3CPz/2.png",
        "Всё ещё ребенок": "https://i.ibb.co/99DH3CPz/2.png",
        "Истинный лидер": "https://i.ibb.co/99DH3CPz/2.png",
        "Знающий себя": "https://i.ibb.co/99DH3CPz/2.png",
        "Создатель чудес": "https://i.ibb.co/99DH3CPz/2.png",
        "Окрылённый страхом": "https://i.ibb.co/99DH3CPz/2.png",
        "Бесстрашный туннелер": "https://i.ibb.co/99DH3CPz/2.png",
        "Горьковато-пряный корень": "https://i.ibb.co/99DH3CPz/2.png",
        "Чудной трофей": "https://i.ibb.co/99DH3CPz/2.png",
        "Прошедший через пекло": "https://i.ibb.co/99DH3CPz/2.png",

        // 3 балла
        "Я люблю скалы!": "https://i.ibb.co/FqgsrT5r/3.png",
        "Орлиный глаз": "https://i.ibb.co/FqgsrT5r/3.png",
        "Точно-Не-Речной": "https://i.ibb.co/FqgsrT5r/3.png",
        "Ах, жизнь моя жестянка!": "https://i.ibb.co/FqgsrT5r/3.png",
        "Паучий враг": "https://i.ibb.co/FqgsrT5r/3.png",
        "Вдохновитель юных": "https://i.ibb.co/FqgsrT5r/3.png",
        "После стольких лун": "https://i.ibb.co/FqgsrT5r/3.png",
        "Бросивший вызов Духам": "https://i.ibb.co/FqgsrT5r/3.png",
        "Первый учитель": "https://i.ibb.co/FqgsrT5r/3.png",
        "Подарок вод": "https://i.ibb.co/FqgsrT5r/3.png",
        "Хранитель очага": "https://i.ibb.co/FqgsrT5r/3.png",

        // 4 балла
        "Благодетель": "https://i.ibb.co/1HTKTFR/4.png",
        "Не чувствующий лап": "https://i.ibb.co/1HTKTFR/4.png",
        "Тишину, пожалуйста!": "https://i.ibb.co/1HTKTFR/4.png",
        "Где моя зарплата?": "https://i.ibb.co/1HTKTFR/4.png",
        "Сладко естся, плохо спится": "https://i.ibb.co/1HTKTFR/4.png",

        // 5 баллов
        "Что такое сон?": "https://i.ibb.co/nqkXnVtB/5.png"
    };

    function addOverlayToImage(img, overlayUrl) {

        if (img.dataset.overlayAdded) return;
        img.dataset.overlayAdded = '1';

        const wrapper = document.createElement('span');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        wrapper.style.lineHeight = '0';

        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);

        const overlay = document.createElement('img');
        overlay.src = overlayUrl;

        overlay.style.position = 'absolute';
        overlay.style.left = '0';
        overlay.style.top = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.pointerEvents = 'none';
        overlay.style.zIndex = '9999';

        wrapper.appendChild(overlay);
    }

    function addMedalOverlays() {

        document.querySelectorAll('img[src*="medal/"]').forEach(img => {

            const match = img.src.match(/medal\/(\d+)\.png/i);
            if (!match) return;

            const medalId = match[1];
            const overlayUrl = medalOverlays[medalId];

            if (!overlayUrl) return;

            addOverlayToImage(img, overlayUrl);
        });
    }

    function addRelicOverlays() {

        document.querySelectorAll('.blocks b').forEach(titleElement => {

            const title = titleElement.textContent
                .replace(/[«»]/g, '')
                .trim();

            const overlayUrl = relicOverlays[title];
            if (!overlayUrl) return;

            const block = titleElement.closest('.blocks');
            if (!block) return;

            const relicId = block.dataset.id;

            const img = document.querySelector(
                `.headers[data-id="${relicId}"] img`
            );

            if (!img) return;

            addOverlayToImage(img, overlayUrl);
        });
    }

    function processAll() {
        addMedalOverlays();
        addRelicOverlays();
    }

    processAll();

    new MutationObserver(processAll).observe(document.body, {
        childList: true,
        subtree: true
    });

})();

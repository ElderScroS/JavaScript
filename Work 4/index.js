//#region Задание 1
// Реализовать класс PrintMaсhine, которой состоит из:
// ■ размера шрифта;
// ■ цвета шрифта;
// ■ семейства шрифта;
// ■ метода print(), который принимает текст и печатает его
// соответствующим шрифтом с помощью document.write().
// Создать объект такого класса и продемонстрировать работу
// метода.

{
    class PrintMachine {
        constructor(fontSize, fontColor, fontFamily) {
            this.fontSize = fontSize;
            this.fontColor = fontColor;
            this.fontFamily = fontFamily;
        }
      
        print(text) {
            document.write('<p style="font-size: ' + this.fontSize + ';' + 'color: ' + this.fontColor + ';' + 'font-family: ' + this.fontFamily + '">' + text + '</p>');
        }
    }
      
    let example = new PrintMachine("24px", "wheat", "Arial");
    example.print("Hello, My name is Mark Nikulov and i am 15 y.o!");
}

//#endregion


//#region Задание 2
// Реализовать класс, описывающий новостную ленту.
// Класс должен содержать:
// ■ массив новостей;
// ■ get-свойство, которое возвращает количество новостей;
// ■ метод для вывода на экран всех новостей;
// ■ метод для добавления новости;
// ■ метод для удаления новости;
// ■ метод для сортировки новостей по дате (от последних новостей до старых);
// Продемонстрировать работу написанных методов.

{
    class NewsFeed {
        constructor() { this.newsArray = []; }
      
        get count() { return this.newsArray.length; }
      
        DisplayAllNews() { this.newsArray.forEach((news) => { document.write('<p>Date - ' + news.date + '\n' + news.text + '</p>'); }); }
      
        AddNews(date, text) { this.newsArray.push({ date, text }); }
        RemoveNews(index) { if (index >= 0 && index < this.newsArray.length) { this.newsArray.splice(index, 1); } }
      
        SortNewsByDate() { this.newsArray.sort((a, b) => a.date.localeCompare(b.date)); }
    }
      
      let exampleNews = new NewsFeed();
      
      exampleNews.AddNews("2023-12-28", "Mark Nikolov wrote a program that allows you to create an atmosphere on Jupiter_-_");
      exampleNews.AddNews("2021-10-17", "Video cards will become very cheap!!!");
      exampleNews.AddNews("2023-01-01", "They started selling games for quantum computers!!!");
      
      alert("Count: " + exampleNews.count);

      exampleNews.DisplayAllNews();
      exampleNews.RemoveNews(1);
      exampleNews.DisplayAllNews();
      
      exampleNews.SortNewsByDate();
      newsFeed.DisplayAllNews();
}



//#endregion
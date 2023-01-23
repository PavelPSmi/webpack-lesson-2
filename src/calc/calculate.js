export const calculate = () => `<div class='timer-position'>
  <form id="datecalc" class="timer-page"> 
            <h3>Калькулятор дат</h3> 
            <label> 
                <strong>Первая дата:</strong> 
                <input type="date" name="firstDate"/> 
            </label> 
            <label> 
                <strong>Вторая дата:</strong> 
                <input type="date" name="secondDate"/> 
            </label> 
            <br>
            <button class="timer-button" type="submit">Расчитать промежуток</button> 
        </form>
    <p id="datecalc__result"></p> 
</div>`;

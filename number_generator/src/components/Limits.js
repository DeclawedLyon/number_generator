import './Limit.css'

export default function Limits(props) {

  return (
    <form id="limits-display">
      <div id='limit-range'>
        <div className="range">
          <span>Min</span>
          <input id="min-limit" name="min-limit" type='number' min="0" max={props.maxLimit} placeholder="0" onChange={(event) => {console.log("Limits.js:15\nThe min number is: ",parseInt(props.minLimit)); props.setMinLimit(event.target.value)}}></input>
        </div>
        <div className="range">
          <label htmlFor="max-limit">Max</label>
          <input id="max-limit" name="max-limit" type='number' min={props.minLimit} placeholder="10000" onChange={(event) => {console.log("Limits.js:15\nThe max number is: ",parseInt(props.maxLimit)); props.setMaxLimit(event.target.value)}}></input>
        </div>
      </div>

      <button id="number-generator" onClick={(event) => {event.preventDefault(); return props.generateNumbers(props.minLimit, props.maxLimit)}}>Generate Numbers</button>
    </form>
  )
}
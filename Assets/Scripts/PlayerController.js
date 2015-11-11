#pragma strict
import UnityEngine.UI;

var speed : float;
var rb : Rigidbody;
var count : int;
var countText : Text;
var winText : Text;

function Start () {
	rb = GetComponent.<Rigidbody>();
	count = 0;
	SetCountText();
	winText.text = "";
}

function FixedUpdate () {
        var moveHorizontal : float = Input.GetAxis ("Horizontal");
        var moveVertical : float = Input.GetAxis ("Vertical");

        var movement : Vector3 = new Vector3 (moveHorizontal, 0.0f, moveVertical);

        rb.AddForce (movement * speed);
}

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.CompareTag ("Pick Up")) {
    	other.gameObject.SetActive (false);
    	count = count + 1;
    	SetCountText();
    }
}

function SetCountText () {
	countText.text = "Count: " + count.ToString ();
    if (count >= 12) {
    	winText.text = "You Win!";
    }
}
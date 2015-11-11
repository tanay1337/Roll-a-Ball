#pragma strict

var offset : Vector3;
var player : GameObject;

function Start () {
	offset = transform.position - player.transform.position;
}

function LateUpdate () {
	transform.position = player.transform.position + offset;
}
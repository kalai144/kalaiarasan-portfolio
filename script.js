function showPage(page){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))
document.getElementById(page).classList.add("active")
history.pushState({page:page},"","#"+page)
}


window.onpopstate=function(e){
if(e.state){
showPage(e.state.page)
}
}


const canvas=document.getElementById("bg")
const scene=new THREE.Scene()
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
const renderer=new THREE.WebGLRenderer({canvas:canvas})
renderer.setSize(window.innerWidth,window.innerHeight)
camera.position.z=30
const geometry=new THREE.TorusGeometry(6,2,16,100)
const material=new THREE.MeshBasicMaterial({wireframe:true})
const gear=new THREE.Mesh(geometry,material)
scene.add(gear)

function animate(){
requestAnimationFrame(animate)
gear.rotation.x+=0.01
gear.rotation.y+=0.01
renderer.render(scene,camera)
}

animate()

document.addEventListener("mousemove",e=>{
const dot=document.createElement("div")
dot.className="trail"
dot.style.left=e.pageX+"px"
dot.style.top=e.pageY+"px"
document.body.appendChild(dot)
setTimeout(()=>dot.remove(),400)
})


const sphereScene=new THREE.Scene()
const sphereCamera=new THREE.PerspectiveCamera(75,300/300,0.1,1000)
const sphereRenderer=new THREE.WebGLRenderer()
sphereRenderer.setSize(300,300)
document.getElementById("skillSphere").appendChild(sphereRenderer.domElement)
const sphereGeometry=new THREE.SphereGeometry(5,32,32)
const sphereMaterial=new THREE.MeshBasicMaterial({wireframe:true})
const sphere=new THREE.Mesh(sphereGeometry,sphereMaterial)
sphereScene.add(sphere)
sphereCamera.position.z=10

function sphereAnimate(){
requestAnimationFrame(sphereAnimate)
sphere.rotation.x+=0.01
sphere.rotation.y+=0.01
sphereRenderer.render(sphereScene,sphereCamera)
}

sphereAnimate()

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector('#bg'),
alpha:true
})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z = 30

const particles = new THREE.BufferGeometry()

const count = 4000

const positions = new Float32Array(count*3)

for(let i=0;i<count*3;i++){
positions[i]=(Math.random()-0.5)*200
}

particles.setAttribute(
'position',
new THREE.BufferAttribute(positions,3)
)

const material = new THREE.PointsMaterial({
size:0.4
})

const mesh = new THREE.Points(particles,material)

scene.add(mesh)

function animate(){

requestAnimationFrame(animate)

mesh.rotation.x +=0.0005
mesh.rotation.y +=0.0005

renderer.render(scene,camera)

}

animate()

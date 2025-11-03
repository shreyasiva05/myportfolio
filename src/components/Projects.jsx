  import React from 'react'
  import ProjectCard from './ProjectCard'
  
  const projects = [
    {
      id:1,
      title: 'Android MNIST Handwriting Recognition',
      desc: 'Custom FingerPaint view and TensorFlow Lite model integration with <100ms inference.',
      tech: ['Kotlin','TensorFlow Lite','Android'],
      img: '/handwriting.png',
      link: '#'
    },
    {
      id:2,
      title: 'Inventory Analytics Dashboard',
      desc: 'Next.js + MySQL analytics with server-side aggregation and visualizations.',
      tech: ['Next.js','SQL','React'],
      img: '/analytics.png',
      link: '#'
    },
    {
      id:3,
      title: 'Producer-Consumer Kernel Module',
      desc: 'Kernel-space producer-consumer system with /proc monitoring and optimizations.',
      tech: ['C','Linux','Concurrency'],
      img: '/producer.png',
      link: '#'
    },
    {
      id:4,
      title: 'Satellite Network',
      desc: 'AVL-balanced binary search tree to model a satellite communication network.',
      tech: ['C++'],
      img: '/satellite.jpg',
      link: '#'
    },
    {
      id:5,
      title: 'Attendance Data Manager',
      desc: ' ETL pipelines system for managing class rosters, attendance checks, and categorization.',
      tech: ['Python'],
      img: '/attendance.png',
      link: '#'
    }
  ]
  
  export default function Projects(){
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    )
  }
package com.revature.beans;

public class Privilege {

		Integer id;
		String name;
		public Integer getId() {
			return id;
		}
		public void setId(Integer id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public Privilege(Integer id, String name) {
			super();
			this.id = id;
			this.name = name;
		}
		
		
		
		public Privilege() {
			super();
		}
		@Override
		public String toString() {
			return "Privilege [id=" + id + ", name=" + name + "]";
		}
		
		
}

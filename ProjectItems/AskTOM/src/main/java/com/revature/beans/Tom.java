package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="toms")
public class Tom {

	@Id
	@Column(name="user_id")
	@SequenceGenerator(sequenceName="tom_seq", name="tom_seq")
	@GeneratedValue(generator="tom_seq", strategy = GenerationType.SEQUENCE)
	private Integer id;
	
	@Column(name="user_name")
	private String username;
	
	@Column(name="tom_pass")
	private String password;
	
	@OneToOne
	@JoinColumn(name="priv_id")
	private Privilege privId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Privilege getPrivId() {
		return privId;
	}

	public void setPrivId(Privilege privId) {
		this.privId = privId;
	}

	@Override
	public String toString() {
		return "Tom [id=" + id + ", username=" + username + ", password=" + password + ", privId=" + privId + "]";
	}

	public Tom(Integer id, String username, String password, Privilege privId) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.privId = privId;
	}

	public Tom(String username, String password, Privilege privId) {
		super();
		this.username = username;
		this.password = password;
		this.privId = privId;
	}

	public Tom() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	
	
}

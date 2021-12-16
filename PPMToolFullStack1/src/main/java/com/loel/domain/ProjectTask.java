package com.loel.domain;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class ProjectTask {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(updatable = false, unique = true)
	private String projectSequence;
	@NotBlank(message = "Please include project summary")
	private String summary;
	private String acceptanceCriteria;
	private String status;
	private Integer priority;
	private Date dueDate;
	// ManyToOne with backlog
	@ManyToOne(fetch = FetchType.EAGER) // REMOVE REFRESH
	@JoinColumn(name = "backlog_id", updatable = false, nullable = false)
	@JsonIgnore
	private Backlog backlog;
	@Column(updatable = false)
	private String projectIdentifier;

	private Date createdAt;
	private Date updatedAt;

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}

	@Override
	public String toString() {
		return "ProjectTask{" + "id=" + id + ", projectSequence='" + projectSequence + '\'' + ", summary='" + summary
				+ '\'' + ", acceptanceCriteria='" + acceptanceCriteria + '\'' + ", status='" + status + '\''
				+ ", priority=" + priority + ", dueDate=" + dueDate + ", projectIdentifier='" + projectIdentifier + '\''
				+ ", create_At=" + createdAt + ", update_At=" + updatedAt + '}';
	}

}
